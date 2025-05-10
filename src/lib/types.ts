export interface Story {
  id: string;
  title: string;
  thumbnailUrl: string;
  category: string;
  content: string;
  quacks: number;
  aiHint: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  audioSrc: string;
  coverArtUrl: string;
  upvotes: number;
  downvotes: number;
  aiHint: string;
}
