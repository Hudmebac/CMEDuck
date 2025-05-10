import { mockSongs } from '@/lib/data';
import { JukeboxClient } from '@/components/jukebox/jukebox-client';
import { Music } from 'lucide-react';

export default function JukeboxPage() {
  // In a real app, you might fetch this data from an API
  const songs = mockSongs;

  return (
    <section className="text-center py-10">
        <Music className="mx-auto h-16 w-16 text-accent mb-4 animate-custom-bounce" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          QuackBox <span className="text-accent">Jukebox</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Tune into the freshest beats from the pond and beyond. Upvote your favorites and climb the charts!
        </p>
        <iframe src="https://suno.com/embed/17ae48c7-82ab-412e-8107-224f04226217" width="760" height="240"><a href="https://suno.com/song/17ae48c7-82ab-412e-8107-224f04226217">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/87a11a36-1991-46de-b6d2-40e4e5783463" width="760" height="240"><a href="https://suno.com/song/87a11a36-1991-46de-b6d2-40e4e5783463">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/e16e158c-e175-44ec-95fc-b220ff17fc59" width="760" height="240"><a href="https://suno.com/song/e16e158c-e175-44ec-95fc-b220ff17fc59">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/11770c68-a357-44e9-9bdc-84b410e93dda" width="760" height="240"><a href="https://suno.com/song/11770c68-a357-44e9-9bdc-84b410e93dda">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/b325f322-46d9-47b6-8153-1d4ba7cce8af" width="760" height="240"><a href="https://suno.com/song/b325f322-46d9-47b6-8153-1d4ba7cce8af">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/985ba613-8f15-42ae-b12d-fd8bbede030d" width="760" height="240"><a href="https://suno.com/song/985ba613-8f15-42ae-b12d-fd8bbede030d">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/b3fd9de3-9827-4e3e-9166-abf275e644b3" width="760" height="240"><a href="https://suno.com/song/b3fd9de3-9827-4e3e-9166-abf275e644b3">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/567ff170-1cc4-4645-80b6-8890d9510f4f" width="760" height="240"><a href="https://suno.com/song/567ff170-1cc4-4645-80b6-8890d9510f4f">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/3ad1c78a-944f-43b1-b63e-3e49b3fca229" width="760" height="240"><a href="https://suno.com/song/3ad1c78a-944f-43b1-b63e-3e49b3fca229">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/b949f1f9-1c4c-4e34-86c1-0b2d897921a4" width="760" height="240"><a href="https://suno.com/song/b949f1f9-1c4c-4e34-86c1-0b2d897921a4">Listen on Suno</a></iframe>
      </section>
  );
}

