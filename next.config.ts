import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export to support middleware and dynamic routes
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.gymleadhub.co.uk',
      },
    ],
  },
};

export default nextConfig;
