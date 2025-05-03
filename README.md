# Random Quote Generator

A minimalist motivational quote generator built with Next.js 15 and Tailwind CSS.

## Features

- Displays random motivational quotes
- Toggle between regular quotes and AI-generated quotes
- Clean, minimal UI designed with Tailwind CSS
- Fetches quotes from an external API with fallback quotes
- Share quotes via Web Share API or copy to clipboard
- Mobile-responsive design
- Custom React hooks for data fetching with proper error handling
- Loading states with skeleton placeholders

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React Hooks
- Web Share API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app` - Next.js app directory
  - `/components` - React components
  - `/services` - API services for fetching quotes
  - `/hooks` - Custom React hooks
  - `/types` - TypeScript interfaces

## API Information

The app fetches quotes from the ZenQuotes API. If the API is unavailable, it falls back to a predefined list of quotes stored in the app.

## Deployment

This application can be deployed in multiple ways:

1. **Vercel (Recommended)** - Best for Next.js applications
2. **Static Export** - GitHub Pages, Netlify, Firebase, etc.
3. **Node.js Server** - Traditional hosting with full feature support
4. **Docker** - Containerized deployment

See the [DEPLOYMENT.md](DEPLOYMENT.md) file for detailed deployment instructions.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Hooks for Data Fetching](https://www.robinwieruch.de/react-hooks-fetch-data/)
- [Next.js Deployment Options](https://nextjs.org/docs/app/getting-started/deploying) 