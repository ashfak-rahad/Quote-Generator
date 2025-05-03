import { Quote } from '../types/quote';

// Backup quotes in case the API is unavailable
const fallbackQuotes: Quote[] = [
  { 
    text: "The only way to do great work is to love what you do.", 
    author: "Steve Jobs" 
  },
  { 
    text: "Life is what happens when you're busy making other plans.", 
    author: "John Lennon" 
  },
  { 
    text: "Believe you can and you're halfway there.", 
    author: "Theodore Roosevelt" 
  },
  { 
    text: "Your time is limited, so don't waste it living someone else's life.", 
    author: "Steve Jobs" 
  },
  { 
    text: "It does not matter how slowly you go as long as you do not stop.", 
    author: "Confucius" 
  },
  { 
    text: "The future belongs to those who believe in the beauty of their dreams.", 
    author: "Eleanor Roosevelt" 
  },
  { 
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    author: "Winston Churchill" 
  },
  { 
    text: "You miss 100% of the shots you don't take.", 
    author: "Wayne Gretzky" 
  },
  { 
    text: "The best time to plant a tree was 20 years ago. The second best time is now.", 
    author: "Chinese Proverb" 
  },
  { 
    text: "If you want to lift yourself up, lift up someone else.", 
    author: "Booker T. Washington" 
  }
];

// Additional quotes for variety
const additionalQuotes: Quote[] = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  },
  {
    text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  }
];

// Combine all quotes for a larger pool
const allQuotes: Quote[] = [...fallbackQuotes, ...additionalQuotes];

// API interface for ZenQuotes
interface ZenQuoteResponse {
  q: string;  // quote text
  a: string;  // author
  h: string;  // html format (not used)
}

export async function getRandomQuote(): Promise<Quote> {
  try {
    // Fetch a random quote from the ZenQuotes API with proper timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch('https://zenquotes.io/api/random', {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch from API: ${response.status}`);
    }
    
    const data = await response.json() as ZenQuoteResponse[];
    
    if (data && data.length > 0) {
      return {
        text: data[0].q,
        author: data[0].a
      };
    } else {
      throw new Error('Invalid data from API');
    }
  } catch (error) {
    console.log('Error fetching quote, using fallback:', error instanceof Error ? error.message : 'Unknown error');
    // If there's an error, return a random quote from our combined array
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    return allQuotes[randomIndex];
  }
} 