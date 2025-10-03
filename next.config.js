/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  basePath: isProd ? '/allgens-corporate-site' : '',
  assetPrefix: isProd ? '/allgens-corporate-site/' : '',
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
