'use client';

import { Quote } from "../types/quote";
import { useState } from "react";
import ShareButton from "./ShareButton";

interface QuoteCardProps {
  initialQuote: Quote;
  onNewQuote: () => Promise<void>;
  isError?: boolean;
}

export default function QuoteCard({ initialQuote, onNewQuote, isError = false }: QuoteCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleNewQuote = async () => {
    setIsLoading(true);
    await onNewQuote();
    setIsLoading(false);
  };

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center p-8 mx-auto my-8 bg-white rounded-lg shadow-lg max-w-2xl">
        <div className="text-red-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-center mt-2">Failed to fetch quote</p>
        </div>
        <button
          onClick={handleNewQuote}
          disabled={isLoading}
          className="px-6 py-3 text-white transition-all duration-300 ease-in-out bg-primary rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 mx-auto my-8 bg-white rounded-lg shadow-lg max-w-2xl">
      <div className="flex flex-col w-full mb-6 text-center">
        <blockquote className="mb-4 text-2xl font-semibold italic text-gray-800">
          <div className="mb-2 text-5xl text-primary">"</div>
          <p className="leading-relaxed">{initialQuote.text}</p>
          <div className="text-5xl text-primary text-right">"</div>
        </blockquote>
        <cite className="text-right text-lg text-gray-600 not-italic">
          - {initialQuote.author}
        </cite>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleNewQuote}
          disabled={isLoading}
          className={`px-6 py-3 text-white transition-all duration-300 ease-in-out bg-primary rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </div>
          ) : (
            "New Quote"
          )}
        </button>
        
        <ShareButton quote={initialQuote} />
      </div>
    </div>
  );
} 