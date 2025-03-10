import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/batch', // The path on your app
        destination: 'https://qa.hopscotch.in/batch', // The target server
      },
    ]
  },
};

export default nextConfig;
