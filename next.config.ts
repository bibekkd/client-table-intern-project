import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/clients',
        permanent: false,
      },
    ]
  },
  trailingSlash: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
};

export default nextConfig;