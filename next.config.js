/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ["http://192.168.124.127"], // Izinkan akses dev dari IP lokal
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Hindari error modul 'fs' di browser
      };
    }
    return config;
  },
};

module.exports = nextConfig;
