// src/lib/image-utils.ts
export const publicImages = [
  '/images/CMEDuck.png',
  '/images/cute.png',
  '/images/eureka.png',
  '/images/duckrapper.jpg',
  '/images/home_duck.png',
  '/images/hero_duck_guitar.png',
  '/images/story_duck_coding.png',
  '/images/story_duck_shield.png',
  '/images/story_duck_thinking.png',
  '/images/story_duck_microphone.png',
  '/images/song_duck_music.png',
  '/images/song_duck_studio.png',
  '/images/song_duck_stage.png',
  '/images/song_duck_techno.png',
  '/images/wave.png',
];

// This function is intended for use in client components within useEffect or for server components
// where the randomness is acceptable per render/build.
export function getRandomImageSrc(): string {
  if (publicImages.length === 0) {
    // Fallback if publicImages is somehow empty, though it's defined above.
    // In a real app, you might want a more robust placeholder or error handling.
    return '/images/home_duck.png'; // Default placeholder
  }
  const randomIndex = Math.floor(Math.random() * publicImages.length);
  return publicImages[randomIndex];
}
