/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/cv' : '',
  assetPrefix: isProd ? '/cv/' : '',
  trailingSlash: true,
  output: 'export', // Add this line for static export
};

module.exports = nextConfig;