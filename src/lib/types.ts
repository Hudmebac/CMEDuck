
export interface Story {
  id: string;
  title: string;
  thumbnailUrl: string; // Retained for potential direct use, though RandomImage is primary
  category: string;
  content: string;
  summary: string; 
  quacks: number;
  aiHint: string; // For RandomImage data-ai-hint prop
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  audioSrc: string;
  coverArtUrl: string; // Retained for potential direct use
  upvotes: number;
  downvotes: number;
  aiHint: string; // For RandomImage data-ai-hint prop
}
