"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react";

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
  currentSongTitle?: string;
  currentSongArtist?: string;
  duration: number;
  currentTime: number;
  onSeek: (time: number) => void;
  isMuted: boolean;
  onMuteToggle: () => void;
}

export function PlayerControls({
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
  volume,
  onVolumeChange,
  currentSongTitle,
  currentSongArtist,
  duration,
  currentTime,
  onSeek,
  isMuted,
  onMuteToggle,
}: PlayerControlsProps) {
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="p-4 md:p-6 rounded-lg shadow-lg bg-card border border-border space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-primary truncate">{currentSongTitle || "No Song Selected"}</h3>
        <p className="text-sm text-muted-foreground truncate">{currentSongArtist || "QuackBox Jukebox"}</p>
      </div>

      <div className="space-y-2">
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={1}
          onValueChange={(value) => onSeek(value[0])}
          disabled={!currentSongTitle}
          className="w-full [&>span:first-child>span]:bg-accent [&>span:last-child]:bg-accent [&>span:last-child]:border-accent"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <Button onClick={onPrev} variant="ghost" size="icon" className="hover:text-accent" disabled={!currentSongTitle}>
          <SkipBack className="h-6 w-6" />
        </Button>
        <Button onClick={onPlayPause} variant="default" size="lg" className="btn-custom w-16 h-16 rounded-full text-2xl" disabled={!currentSongTitle}>
          {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
        </Button>
        <Button onClick={onNext} variant="ghost" size="icon" className="hover:text-accent" disabled={!currentSongTitle}>
          <SkipForward className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <Button onClick={onMuteToggle} variant="ghost" size="icon" className="hover:text-accent">
          {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
        <Slider
          value={[isMuted ? 0 : volume * 100]}
          max={100}
          step={1}
          onValueChange={(value) => onVolumeChange(value[0] / 100)}
          className="w-full max-w-xs [&>span:first-child>span]:bg-accent [&>span:last-child]:bg-accent [&>span:last-child]:border-accent"
        />
      </div>
    </div>
  );
}
