/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static export, uncomment these lines:
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // For Docker deployment, uncomment this line:
  // output: 'standalone',
  
  // Default server deployment config
  reactStrictMode: true,
};

module.exports = nextConfig; 