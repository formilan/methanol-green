import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/methanol-green',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
