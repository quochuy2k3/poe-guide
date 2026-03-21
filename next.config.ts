import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/poe-guide",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
