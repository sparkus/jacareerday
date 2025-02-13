/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-jacareerday.agw3.org',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig 