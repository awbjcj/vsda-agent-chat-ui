/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/chat",
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
