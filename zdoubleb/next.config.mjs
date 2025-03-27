// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
    // Enable experimental features if needed
    experimental: {
      // serverActions: true,
    },
  };
  
  // This is the key change - using ES module export syntax instead of CommonJS
  export default nextConfig;