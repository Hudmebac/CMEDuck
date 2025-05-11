// src/lib/image-utils.ts
export const publicImages = [
  '/images/Duck1.png',
 '/images/Duck2.png',
 '/images/Duck3.png',
 '/images/Duck4.png',
 '/images/Duck5.png',
 '/images/Duck6.png',
 '/images/Duck7.png',
 '/images/Duck8.png',
 '/images/CMEDuck.png',
 '/images/cute.png',
 '/images/duckrapper.png',
 '/images/eureka.png',
 '/images/excited.png',
 '/images/explore.png',
 '/images/glum.png',
 '/images/home_duck.png',
 '/images/point.png',
 '/images/smile.png',
 '/images/wave.png',
 '/images/duckshoot.png',
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
