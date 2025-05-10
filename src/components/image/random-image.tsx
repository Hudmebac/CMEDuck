// src/components/image/random-image.tsx
"use client";

import NextImage, { type ImageProps as NextImageProps } from 'next/image'; // Aliased to NextImage
import { useState, useEffect } from 'react';
import { publicImages, getRandomImageSrc } from '@/lib/image-utils';
import { cn } from '@/lib/utils';

// Omit src as it's determined internally, and data-ai-hint as it's generic
// Pass all other NextImageProps through using ...rest
type RandomImageProps = Omit<NextImageProps, 'src' | 'data-ai-hint'>;

export function RandomImage({ alt, width, height, fill, className, priority, ...rest }: RandomImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    setImageSrc(getRandomImageSrc());
  }, []);

  if (!imageSrc) {
    // Placeholder or loading state while image source is being determined
    const placeholderStyles: React.CSSProperties = {};
    if (!fill) {
      // Respect provided width/height for non-fill images
      if (width) placeholderStyles.width = typeof width === 'number' ? `${width}px` : width;
      if (height) placeholderStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    // Attempt to extract border-radius from className for the placeholder
    const borderRadiusMatch = className?.match(/rounded-(full|lg|md|sm|\d*px|\[\d+(px|rem|em)\])/);
    const borderRadiusClass = borderRadiusMatch ? borderRadiusMatch[0] : 'rounded-md';

    return (
      <div
        style={placeholderStyles}
        className={cn(
          "bg-muted animate-pulse",
          fill ? "w-full h-full" : "", // Ensure fill placeholders take space if parent defines it
          borderRadiusClass, // Apply extracted or default border radius
          className // Pass original className for layout (margins, etc.) but be mindful it might contain image-specific styles
        )}
        aria-label={alt || "Loading image"} // Provide alt for placeholder as well
        role="img"
      />
    );
  }
  
  return (
    <NextImage // Use aliased NextImage
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      priority={priority}
      data-ai-hint="random image" // Generic hint for random images
      {...rest} // Spread remaining props
    />
  );
}
