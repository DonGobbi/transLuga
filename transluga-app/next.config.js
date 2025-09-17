/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // Removed basePath for Firebase hosting
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
