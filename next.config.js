/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
  domains: ['sean.cherrybrooknetworks.dev'],
  path: '/_next/image',
  },
}

module.exports = nextConfig
