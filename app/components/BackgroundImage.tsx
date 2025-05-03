'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

type BackgroundImageProps = {
  triggerChange?: number;
}

export default function BackgroundImage({ triggerChange = 0 }: BackgroundImageProps) {
  const [imageData, setImageData] = useState({
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imageCredit: 'Kalen Emsley',
    imageProfile: 'https://unsplash.com/@kalenemsley',
    imageAlt: 'Mountain landscape with lake view'
  });

  // Function to get a random scenery image from Unsplash
  const getRandomUnsplashImage = () => {
    // Use Unsplash Source API for random nature images
    // Using a fixed width (1920) and height (1080) for performance
    const categories = ['nature', 'landscape', 'mountains', 'ocean', 'forest', 'sunset'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const imageUrl = `https://source.unsplash.com/1920x1080/?${randomCategory}`;
    
    // Fetch to trigger the random image generation
    fetch(imageUrl)
      .then(response => {
        // The response URL contains the actual random image URL
        const photographerMatch = response.url.match(/photo-([^?]+)/);
        const photographerId = photographerMatch ? photographerMatch[1].split('-')[0] : 'unknown';
        
        setImageData({
          imageUrl: response.url,
          imageCredit: 'Unsplash Photographer',
          imageProfile: `https://unsplash.com/photos/${photographerId}`,
          imageAlt: `Beautiful ${randomCategory} scenery`
        });
      })
      .catch(error => {
        console.error('Error fetching random image:', error);
      });
  };

  // Change the background image when triggerChange changes
  useEffect(() => {
    getRandomUnsplashImage();
  }, [triggerChange]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" /> {/* Dark overlay for better text readability */}
      <Image
        src={imageData.imageUrl}
        alt={imageData.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        unoptimized={false} // Let Next.js optimize the image
      />
      <div className="absolute bottom-2 right-2 text-white text-xs opacity-70 z-20">
        Photo from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
      </div>
    </div>
  );
} 