/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Keep the existing TailwindCSS and other configurations
  webpack: (config) => {
    return config;
  },
}

export default nextConfig
