import { mockStories } from '@/lib/data';
import { StoryCard } from '@/components/story/story-card';

export default function AdventureLogPage() {
  const stories = mockStories;

  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          CME Duck's <span className="text-accent">Adventure Log</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Browse through the chronicles of CME Duck's most memorable tech tales and problem-solving triumphs.
        </p>
      </section>
      
      {stories.length === 0 ? (
        <p className="text-center text-muted-foreground">No adventures logged yet. Stay tuned!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      )}
    </div>
  );
}
