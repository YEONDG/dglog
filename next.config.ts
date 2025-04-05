import type { NextConfig } from "next";

const nextConfig: NextConfig = () => ({
  transpilePackages: ["next-mdx-remote"],
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
});

export default nextConfig;
