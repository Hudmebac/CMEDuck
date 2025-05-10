
// src/components/image/random-image.tsx
"use client";

import NextImage, { type ImageProps as NextImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { getRandomImageSrc } from '@/lib/image-utils';
import { cn } from '@/lib/utils';

// Omit src as it's determined internally.
// Keep data-ai-hint as an optional prop.
type RandomImageProps = Omit<NextImageProps, 'src'> & {
  ['data-ai-hint']?: string; // Explicitly define data-ai-hint as an optional prop
};

export function RandomImage({ 
  alt, 
  width, 
  height, 
  fill, 
  className, 
  priority, 
  ['data-ai-hint']: aiHint, // Destructure data-ai-hint
  ...rest 
}: RandomImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    setImageSrc(getRandomImageSrc());
  }, []);

  if (!imageSrc) {
    const placeholderStyles: React.CSSProperties = {};
    if (!fill) {
      if (width) placeholderStyles.width = typeof width === 'number' ? `${width}px` : width;
      if (height) placeholderStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    const borderRadiusMatch = className?.match(/rounded-(full|lg|md|sm|\d*px|\[\d+(px|rem|em)\])/);
    const borderRadiusClass = borderRadiusMatch ? borderRadiusMatch[0] : 'rounded-md';

    return (
      <div
        style={placeholderStyles}
        className={cn(
          "bg-muted animate-pulse",
          fill ? "w-full h-full" : "",
          borderRadiusClass,
          className // Original className is applied here for placeholder layout
        )}
        aria-label={alt || "Loading image"}
        role="img"
      />
    );
  }
  
  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={cn(className)} // Ensure className is correctly merged and applied
      priority={priority}
      data-ai-hint={aiHint || "random image"} // Use passed aiHint or fallback
      {...rest}
    />
  );
}
