'use client';

import { useQuote } from './hooks/useQuote';
import QuoteCard from './components/QuoteCard';
import QuoteSourceSelector from './components/QuoteSourceSelector';
import LoadingQuote from './components/LoadingQuote';

export default function Home() {
  const { 
    quote, 
    isLoading, 
    isError, 
    quoteSource, 
    fetchNewQuote, 
    setQuoteSource 
  } = useQuote();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
        Inspirational Quote Generator
      </h1>
      
      <QuoteSourceSelector 
        quoteSource={quoteSource} 
        onSourceChange={setQuoteSource} 
        disabled={isLoading} 
      />
      
      {isLoading ? <LoadingQuote /> : (
        <QuoteCard 
          initialQuote={quote} 
          onNewQuote={fetchNewQuote} 
          isError={isError}
        />
      )}
      
      <footer className="mt-12 text-center text-gray-500 dark:text-gray-400">
        <p>Built with Next.js 15 and Tailwind CSS</p>
      </footer>
    </main>
  );
} 