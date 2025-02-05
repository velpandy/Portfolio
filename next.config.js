/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: false },
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

