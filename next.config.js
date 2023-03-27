/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/content',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
