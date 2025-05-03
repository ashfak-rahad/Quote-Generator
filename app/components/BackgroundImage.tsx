'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

type BackgroundImageProps = {
  triggerChange?: number;
}

// Array of pre-defined Unsplash images to ensure reliability
const BACKGROUND_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Mountain landscape with lake view'
  },
  {
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Beautiful forest landscape'
  },
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Scenic mountain valley'
  },
  {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Sunset over the ocean'
  },
  {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Sunlight through forest trees'
  },
  {
    url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Beautiful countryside landscape'
  },
  {
    url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Sunset with beautiful sky'
  },
  {
    url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Mountain reflected in lake'
  }
];

export default function BackgroundImage({ triggerChange = 0 }: BackgroundImageProps) {
  const [imageData, setImageData] = useState(BACKGROUND_IMAGES[0]);

  // Function to get a random image from our predefined array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * BACKGROUND_IMAGES.length);
    return BACKGROUND_IMAGES[randomIndex];
  };

  // Change the background image when triggerChange changes
  useEffect(() => {
    setImageData(getRandomImage());
  }, [triggerChange]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" /> {/* Dark overlay for better text readability */}
      <Image
        src={imageData.url}
        alt={imageData.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        unoptimized={true} // Since we're in static export mode, set to true
      />
      <div className="absolute bottom-2 right-2 text-white text-xs opacity-70 z-20">
        Photo from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
      </div>
    </div>
  );
} 