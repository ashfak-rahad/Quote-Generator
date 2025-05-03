/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static export
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // Default server deployment config
  reactStrictMode: true,
};

module.exports = nextConfig; 