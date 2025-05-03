'use client';

import { useState } from 'react';
import { useQuote } from './hooks/useQuote';
import QuoteCard from './components/QuoteCard';
import QuoteSourceSelector from './components/QuoteSourceSelector';
import LoadingQuote from './components/LoadingQuote';
import BackgroundImage from './components/BackgroundImage';

export default function Home() {
  const [bgTrigger, setBgTrigger] = useState(0);
  const { 
    quote, 
    isLoading, 
    isError, 
    quoteSource, 
    fetchNewQuote, 
    setQuoteSource 
  } = useQuote();

  // Function to handle fetching a new quote and changing the background
  const handleNewQuote = async () => {
    await fetchNewQuote();
    // Increment the trigger to cause the background image to change
    setBgTrigger(prev => prev + 1);
  };

  return (
    <>
      <BackgroundImage triggerChange={bgTrigger} />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-transparent transition-colors duration-200">
        <h1 className="mb-8 text-4xl font-bold text-center text-white">
          Inspirational Quote Generator
        </h1>
        
        <QuoteSourceSelector 
          quoteSource={quoteSource} 
          onSourceChange={(source) => {
            setQuoteSource(source);
            // Also trigger a background change when source changes
            setBgTrigger(prev => prev + 1);
          }} 
          disabled={isLoading} 
        />
        
        {isLoading ? <LoadingQuote /> : (
          <QuoteCard 
            initialQuote={quote} 
            onNewQuote={handleNewQuote} 
            isError={isError}
          />
        )}
        
        <footer className="mt-12 text-center text-gray-200">
          <p>Built with Next.js 15 and Tailwind CSS</p>
        </footer>
      </main>
    </>
  );
} 