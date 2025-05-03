import { Quote } from '../types/quote';

// These are simulated AI-generated quotes
const aiGeneratedQuotes: Quote[] = [
  {
    text: "True growth comes from embracing the unknown and stepping beyond your comfort boundaries.",
    author: "AI Assistant"
  },
  {
    text: "Every challenge you face is simply a test of your resilience. Rise stronger each time.",
    author: "AI Assistant"
  },
  {
    text: "The path to success is not linear but a tapestry of efforts, mistakes, and persistence.",
    author: "AI Assistant"
  },
  {
    text: "Look within for strength, around you for inspiration, and ahead for your purpose.",
    author: "AI Assistant"
  },
  {
    text: "Your potential is limited only by the boundaries of your belief in yourself.",
    author: "AI Assistant"
  },
  {
    text: "Transformation happens when you align your actions with your deepest values.",
    author: "AI Assistant"
  },
  {
    text: "The greatest version of yourself exists in the moments when fear is present but doesn't control you.",
    author: "AI Assistant"
  },
  {
    text: "Your unique perspective is your greatest gift to the world. Share it boldly.",
    author: "AI Assistant"
  },
  {
    text: "Today's small steps create tomorrow's remarkable journey.",
    author: "AI Assistant"
  },
  {
    text: "Kindness to yourself creates space for kindness toward others.",
    author: "AI Assistant"
  }
];

// Simulate AI quote generation with a delay
export async function getAIGeneratedQuote(): Promise<Quote> {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * aiGeneratedQuotes.length);
      resolve(aiGeneratedQuotes[randomIndex]);
    }, 1500); // 1.5 second delay to simulate AI processing
  });
} 