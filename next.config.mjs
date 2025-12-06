/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Trailing slashes for better compatibility with static hosting
  trailingSlash: true,
};

export default nextConfig;
