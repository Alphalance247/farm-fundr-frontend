import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "padycvgcoops.name.ng",
        // pathname: "/**" // optional, allows all paths
      },
    ],
  },
};

export default nextConfig;
