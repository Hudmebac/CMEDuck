"use client";

import { useState, useEffect, useRef, useCallback }  from 'react';
import type { Song } from '@/lib/types';
import { PlayerControls } from './player-controls';
import { SongCard } from './song-card';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { ListMusic, Search } from 'lucide-react';

interface JukeboxClientProps {
  initialSongs: Song[];
}

export function JukeboxClient({ initialSongs }: JukeboxClientProps) {
  const [songs, setSongs] = useState<Song[]>([]); // Initialize with empty array
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const [userVotes, setUserVotes] = useState<Record<string, 'upvote' | 'downvote'>>({});
  const [sortOrder, setSortOrder] = useState<'popularity' | 'title' | 'artist'>('popularity');
  const [searchTerm, setSearchTerm] = useState('');

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Import mockSongs inside useEffect to avoid issues with server rendering
    import('@/lib/data').then(({ mockSongs }) => {
    // Load votes from localStorage
    const storedVotes = localStorage.getItem('jukeboxUserVotes');
    if (storedVotes) {
      setUserVotes(JSON.parse(storedVotes));
    }
    // Apply votes to initial songs
    setSongs(mockSongs.map(song => {
        // Create a mutable copy to apply local votes
        return { ...song };
      })
    );
    });
  }, []); // Run only once on mount

  useEffect(() => {
    // Save votes to localStorage
    localStorage.setItem('jukeboxUserVotes', JSON.stringify(userVotes));
  }, [userVotes]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio();
      audioRef.current.volume = volume;

      const audio = audioRef.current;
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      const handleEnded = () => handleNextSong();

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', handleEnded);
        audio.pause();
      };
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);
  
  const playSong = useCallback((song: Song) => {
    if (audioRef.current) {
      if (currentSong?.id === song.id && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setCurrentSong(song);
        audioRef.current.src = song.audioSrc;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(e => {
          console.error("Error playing audio:", e);
          toast({ title: "Playback Error", description: "Could not play song.", variant: "destructive"});
          setIsPlaying(false);
        });
      }
    }
  }, [currentSong, isPlaying, toast]);

  const handlePlayPause = useCallback(() => {
    if (!audioRef.current || !currentSong) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => {
         console.error("Error playing audio:", e);
         toast({ title: "Playback Error", description: "Could not resume song.", variant: "destructive"});
      });
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, currentSong, toast]);

  const handleNextSong = useCallback(() => {
    if (!songs.length) return;
    const currentIndex = songs.findIndex(s => s.id === currentSong?.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(songs[nextIndex]);
  }, [songs, currentSong, playSong]);

  const handlePrevSong = useCallback(() => {
    if (!songs.length) return;
    const currentIndex = songs.findIndex(s => s.id === currentSong?.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(songs[prevIndex]);
  }, [songs, currentSong, playSong]);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (isMuted && newVolume > 0) setIsMuted(false);
    if (newVolume === 0 && !isMuted) setIsMuted(true);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVote = (songId: string, voteType: 'upvote' | 'downvote') => {
    if (userVotes[songId] === voteType) {
      // User is trying to unvote, not supported in this simplified version
      // Or, user is clicking the same vote again.
      toast({ title: "Already Voted", description: `You've already ${voteType}d this song.` });
      return;
    }

    setSongs(prevSongs =>
      prevSongs.map(s => {
        if (s.id === songId) {
          let newUpvotes = s.upvotes;
          let newDownvotes = s.downvotes;

          // Revert previous vote if exists
          if (userVotes[songId] === 'upvote') newUpvotes--;
          if (userVotes[songId] === 'downvote') newDownvotes--;
          
          // Apply new vote
          if (voteType === 'upvote') newUpvotes++;
          else newDownvotes++;
          
          return { ...s, upvotes: newUpvotes, downvotes: newDownvotes };
        }
        return s;
      })
    );
    setUserVotes(prev => ({ ...prev, [songId]: voteType }));
    toast({ title: "Vote Cast!", description: `You ${voteType}d the song.`, className: "bg-accent text-accent-foreground" });
  };
  
  const sortedAndFilteredSongs = songs
    .filter(song => 
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'popularity') {
        return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes);
      }
      if (sortOrder === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortOrder === 'artist') {
        return a.artist.localeCompare(b.artist);
      }
      return 0;
    });

  return (
    <div className="space-y-8">
      <PlayerControls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNextSong}
        onPrev={handlePrevSong}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        currentSongTitle={currentSong?.title}
        currentSongArtist={currentSong?.artist}
        duration={duration}
        currentTime={currentTime}
        onSeek={handleSeek}
        isMuted={isMuted}
        onMuteToggle={handleMuteToggle}
      />

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Search songs or artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={sortOrder} onValueChange={(value: 'popularity' | 'title' | 'artist') => setSortOrder(value)}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="artist">Artist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {sortedAndFilteredSongs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {sortedAndFilteredSongs.map(song => (
              <SongCard
                key={song.id}
                song={song}
                onPlay={playSong}
                onVote={handleVote}
                userVote={userVotes[song.id]}
                isPlaying={currentSong?.id === song.id && isPlaying}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 card-base">
             <ListMusic className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No songs match your criteria. Try a different search or sort!</p>
          </div>
        )}
      </div>
    </div>
  );
}
