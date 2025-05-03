import { useState, useEffect, useCallback } from 'react';
import { Quote } from '../types/quote';
import { getRandomQuote } from '../services/quoteService';
import { getAIGeneratedQuote } from '../services/aiQuoteService';

export type QuoteSource = 'regular' | 'ai';

interface UseQuoteResult {
  quote: Quote;
  isLoading: boolean;
  isError: boolean;
  quoteSource: QuoteSource;
  fetchNewQuote: (source?: QuoteSource) => Promise<void>;
  setQuoteSource: (source: QuoteSource) => void;
}

export function useQuote(): UseQuoteResult {
  const [quote, setQuote] = useState<Quote>({ text: '', author: '' });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [quoteSource, setQuoteSource] = useState<QuoteSource>('regular');

  const fetchNewQuote = useCallback(async (source?: QuoteSource) => {
    const activeSource = source || quoteSource;
    setIsError(false);
    setIsLoading(true);

    try {
      let newQuote: Quote;
      
      if (activeSource === 'ai') {
        newQuote = await getAIGeneratedQuote();
      } else {
        newQuote = await getRandomQuote();
      }
      
      setQuote(newQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [quoteSource]);

  // Fetch a quote on initial load
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const newQuote = await getRandomQuote();
        if (isMounted) {
          setQuote(newQuote);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching quote:', error);
          setIsError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to prevent state updates on unmounted component
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSetQuoteSource = useCallback((source: QuoteSource) => {
    setQuoteSource(source);
    fetchNewQuote(source);
  }, [fetchNewQuote]);

  return { 
    quote, 
    isLoading, 
    isError, 
    quoteSource, 
    fetchNewQuote, 
    setQuoteSource: handleSetQuoteSource 
  };
} 