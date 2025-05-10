
"use client";

import { RandomImage } from '@/components/image/random-image';
import type { Song } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Play, ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react'; // CheckCircle for voted indication

interface SongCardProps {
  song: Song;
  onPlay: (song: Song) => void;
  onVote: (songId: string, voteType: 'upvote' | 'downvote') => void;
  userVote?: 'upvote' | 'downvote' | null;
  isPlaying: boolean;
}

export function SongCard({ song, onPlay, onVote, userVote, isPlaying }: SongCardProps) {
  const popularity = song.upvotes - song.downvotes;

  return (
    <div className="card-base p-4 flex flex-col sm:flex-row items-center gap-4 transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden shrink-0">
        <RandomImage
          alt={`${song.title} cover art`}
          fill
          className="object-contain" // Changed from object-cover
          data-ai-hint={song.aiHint || "music album"}
        />
        {isPlaying && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Play className="h-8 w-8 text-white animate-pulse" />
          </div>
        )}
      </div>

      <div className="flex-grow text-center sm:text-left">
        <h4 className="text-lg font-semibold text-primary truncate group-hover:text-accent">{song.title}</h4>
        <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
        <p className="text-xs text-accent">Popularity: {popularity}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 mt-2 sm:mt-0">
        <Button 
          onClick={() => onPlay(song)} 
          variant={isPlaying ? "secondary" : "default"} 
          size="sm" 
          className={`btn-custom ${isPlaying ? 'bg-secondary hover:bg-secondary/90' : 'btn-custom'}`}
        >
          <Play className="mr-2 h-4 w-4" /> {isPlaying ? "Playing" : "Play"}
        </Button>
        <div className="flex gap-1">
          <Button
            onClick={() => onVote(song.id, 'upvote')}
            variant={userVote === 'upvote' ? "secondary" : "outline"}
            size="icon"
            className={`w-9 h-9 ${userVote === 'upvote' ? 'border-green-500 text-green-500' : 'border-muted hover:border-green-500 hover:text-green-500'}`}
            aria-label="Upvote song"
          >
            {userVote === 'upvote' ? <CheckCircle className="h-5 w-5" /> : <ThumbsUp className="h-5 w-5" />}
          </Button>
          <Button
            onClick={() => onVote(song.id, 'downvote')}
            variant={userVote === 'downvote' ? "secondary" : "outline"}
            size="icon"
            className={`w-9 h-9 ${userVote === 'downvote' ? 'border-red-500 text-red-500' : 'border-muted hover:border-red-500 hover:text-red-500'}`}
            aria-label="Downvote song"
          >
             {userVote === 'downvote' ? <CheckCircle className="h-5 w-5" /> : <ThumbsDown className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
