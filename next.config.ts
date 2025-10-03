import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export to support middleware and dynamic routes
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
