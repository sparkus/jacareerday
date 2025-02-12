/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-jacareerday.agw3.org',
      },
    ],
  },
}

module.exports = nextConfig 