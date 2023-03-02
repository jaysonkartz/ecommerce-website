/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    // next line is not required
    path: "http://localhost:3000/images",
  },
  flags: {
    DEV_SSR: false,
  },
};

module.exports = nextConfig;
