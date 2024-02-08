/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
  domains: ['sean.cherrybrooknetworks.dev'],
  path: '/_next/image',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
return config;
  },
};

module.exports = nextConfig;