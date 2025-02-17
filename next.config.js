/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: false },
  compress: true, // Enable Gzip/Brotli compression
  images: {
    formats: ["image/avif", "image/webp"], // Modern formats for faster loading
  },
};

module.exports = {
  reactStrictMode: false,
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = {
        type: 'filesystem', // Enable persistent caching for faster builds
      };
    }
    return config;
  },
};

