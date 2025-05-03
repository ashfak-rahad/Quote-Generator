# Deployment Guide for Quote Generator

This guide provides instructions for deploying the Quote Generator application using different methods.

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest platform for deploying Next.js applications.

### Steps:

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Log in to Vercel:
   ```bash
   vercel login
   ```
4. Deploy from your project directory:
   ```bash
   vercel
   ```
5. For production deployment:
   ```bash
   vercel --prod
   ```

## Option 2: Deploy as Static Site (GitHub Pages, Netlify, etc.)

For static deployment, you'll need to modify your application slightly.

### Steps:

1. In `next.config.js`, ensure these options are uncommented:
   ```js
   output: 'export',
   images: {
     unoptimized: true,
   },
   ```

2. Build the application:
   ```bash
   npm run build
   ```

3. The static site will be generated in the `out` directory.

4. Deploy this directory to any static hosting service:
   - GitHub Pages
   - Netlify
   - Surge
   - AWS S3
   - Firebase Hosting

## Option 3: Deploy to a Node.js Server

For full feature support, deploy as a Node.js application.

### Steps:

1. In `next.config.js`, comment out the static export options.

2. Build the application:
   ```bash
   npm run build
   ```

3. Start the server:
   ```bash
   npm run start
   ```

4. For production deployment, you'll need to set up a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start npm --name "quote-generator" -- start
   ```

## Option 4: Deploy with Docker

For containerized deployment:

1. Create a Dockerfile:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. Build the Docker image:
   ```bash
   docker build -t quote-generator .
   ```

3. Run the container:
   ```bash
   docker run -p 3000:3000 quote-generator
   ```

## Environment Variables

If your deployment requires environment variables, make sure to set them on your deployment platform.

For Vercel, you can set them in the Vercel dashboard or using the following command:
```bash
vercel env add VARIABLE_NAME
```

## Troubleshooting

- If you encounter issues with API calls on static exports, you'll need to adjust your code to use client-side API calls only.
- Ensure all dependencies are properly installed before building.
- Check that your Node.js version is compatible with Next.js 15.