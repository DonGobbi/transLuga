/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/transLuga',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
