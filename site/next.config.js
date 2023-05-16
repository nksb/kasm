/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'NKSB Workspaces',
    description: 'Development area for new Kasm Workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://nksb.github.io/kasm/',
    contactUrl: 'https://nksb.github.io/kasm/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
