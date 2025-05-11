
import { RandomImage } from '@/components/image/random-image';
import { mockStories } from '@/lib/data';
import type { Story } from '@/lib/types';
import { StoryDetailClient } from '@/components/story/story-detail-client';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

async function getStory(id: string): Promise<Story | undefined> {
  // Simulate API call
  return mockStories.find((story) => story.id === id);
}

export default async function StoryPage({ params }: { params: { storyId: string } }) {
  const story = await getStory(params.storyId);

  if (!story) {
    return <div className="text-center py-10">Story not found. Quack!</div>;
  }

  return (
    <div className="space-y-8">
      <Link href="/adventure-log" className="inline-flex items-center text-accent hover:underline">
        <Button variant="ghost">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Adventure Log
        </Button>
      </Link>

      <Card className="card-base overflow-hidden">
        <div className="relative aspect-[16/7] overflow-hidden flex items-end p-8 bg-gradient-to-t from-black/70 to-transparent">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {story.title}
            </h1></div>
        <CardContent className="p-6 md:p-8">
          <StoryDetailClient story={story} />
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return mockStories.map((story) => ({
    storyId: story.id,
  }));
}
