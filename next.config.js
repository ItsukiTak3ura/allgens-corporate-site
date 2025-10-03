/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  basePath: '/allgens-corporate-site',
  assetPrefix: '/allgens-corporate-site/',
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig
