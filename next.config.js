/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // appDir ya no es necesario en Next.js 15
  },
  images: {
    // Puedes personalizar domains si usas imágenes externas
    // domains: ['tu-dominio.com'],
  },
  // Habilita los imports con @/
  webpack(config) {
    config.resolve.alias['@'] = require('path').resolve(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;
