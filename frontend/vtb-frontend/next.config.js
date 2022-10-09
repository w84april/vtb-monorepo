/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/profile',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['gateway.pinata.cloud', 'rmkr.mypinata.cloud'],
  },
}

module.exports = nextConfig


