import type { NextConfig } from "next";

/* const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com']        //specify domains that are used
  }
}; */

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_FORM: process.env.NEXT_PUBLIC_FORM,
  },
};

export default nextConfig;
