/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/transLuga',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
