
import NextImage from 'next/image';
import { publicImages } from '@/lib/image-utils';
import { Camera } from 'lucide-react';

export default function DuckShootPage() {
  const images = publicImages;

  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <Camera className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Duck <span className="text-accent">Shoot</span> Gallery
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          A collection of CME Duck&apos;s finest moments captured on camera. Enjoy the gallery!
        </p>
      </section>

      {images.length === 0 ? (
        <p className="text-center text-muted-foreground">No images in the gallery yet. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {images.map((imageUrl, index) => (
            <div key={index} className="card-base overflow-hidden aspect-square group relative p-2 hover:shadow-accent/20 hover:shadow-lg transition-shadow">
              <NextImage
                src={imageUrl}
                alt={`CME Duck Image ${index + 1}`}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                data-ai-hint="duck photograph"
                priority={index < 10} // Prioritize loading for the first few images
              />
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <p className="text-white text-sm font-semibold p-2 bg-black/70 rounded">CME Duck</p>
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
