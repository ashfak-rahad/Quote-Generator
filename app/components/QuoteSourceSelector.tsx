'use client';

import { QuoteSource } from '../hooks/useQuote';

interface QuoteSourceSelectorProps {
  quoteSource: QuoteSource;
  onSourceChange: (source: QuoteSource) => void;
  disabled?: boolean;
}

export default function QuoteSourceSelector({
  quoteSource,
  onSourceChange,
  disabled = false
}: QuoteSourceSelectorProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mb-6 space-y-3 sm:space-y-0 sm:space-x-4">
      <span className="text-gray-700 font-medium">Quote Source:</span>
      <div className="flex space-x-2 rounded-lg bg-gray-100 p-1">
        <button
          onClick={() => onSourceChange('regular')}
          disabled={disabled || quoteSource === 'regular'}
          className={`px-4 py-2 rounded-md transition-all ${
            quoteSource === 'regular'
              ? 'bg-white text-primary shadow-sm'
              : 'text-gray-600 hover:text-primary hover:bg-gray-200'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Regular
        </button>
        <button
          onClick={() => onSourceChange('ai')}
          disabled={disabled || quoteSource === 'ai'}
          className={`px-4 py-2 rounded-md transition-all ${
            quoteSource === 'ai'
              ? 'bg-white text-primary shadow-sm'
              : 'text-gray-600 hover:text-primary hover:bg-gray-200'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          AI Generated
        </button>
      </div>
    </div>
  );
} 