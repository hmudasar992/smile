"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface ProgressiveImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality?: number;
  priority?: boolean;
}

export default function ProgressiveImage({
  src,
  alt,
  width,
  height,
  quality = 85,
  priority = false,
  className = "",
  onError,
  ...props
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "100%",
        paddingBottom: `${(height / width) * 100}%`,
      }}
    >
      {/* Pulse loading animation */}
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-pulse bg-gray-200 rounded-lg"
          role="status"
          aria-label="Loading image..."
        />
      )}

      {/* Full quality image */}
      <Image
        {...props}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 276px"
        className={`
          transition-opacity 
          duration-300 
          ${className} 
          ${isLoaded ? "opacity-100" : "opacity-0"}
        `}
        quality={quality}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        onError={onError}
        unoptimized={process.env.NODE_ENV === "development"}
      />
    </div>
  );
}
