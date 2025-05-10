import { mockSongs } from '@/lib/data';
import { JukeboxClient } from '@/components/jukebox/jukebox-client';
import { Music } from 'lucide-react';

export default function JukeboxPage() {
  // In a real app, you might fetch this data from an API
  const songs = mockSongs;

  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <Music className="mx-auto h-16 w-16 text-accent mb-4 animate-custom-bounce" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          QuackBox <span className="text-accent">Jukebox</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Tune into the freshest beats from the pond and beyond. Upvote your favorites and climb the charts!
        </p>
      </section>
      
      <JukeboxClient initialSongs={songs} />
    </div>
  );
}

