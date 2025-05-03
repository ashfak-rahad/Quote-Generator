'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function BackgroundImage() {
  // Use a beautiful mountain image from Unsplash with direct URL
  // Using a public domain image from Unsplash with proper attribution
  const imageUrl = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  const imageCredit = 'Kalen Emsley';
  const imageAlt = 'Mountain landscape with lake view';

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" /> {/* Dark overlay for better text readability */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        unoptimized={false} // Let Next.js optimize the image
      />
      <div className="absolute bottom-2 right-2 text-white text-xs opacity-70 z-20">
        Photo by <a href="https://unsplash.com/@kalenemsley" target="_blank" rel="noopener noreferrer" className="underline">{imageCredit}</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
      </div>
    </div>
  );
} 