/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static export, uncomment these lines:
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
  
  // For Docker deployment, uncomment this line:
  // output: 'standalone',
  
  // Default server deployment config
  reactStrictMode: true,
};

module.exports = nextConfig; 