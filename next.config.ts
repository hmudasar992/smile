// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // For CMS images
      {
        protocol: "https",
        hostname: "admin.iillestfindsagency.com",
        pathname: "/uploads/**",
      },
      // For frontend images
      {
        protocol: "https",
        hostname: "iillestfindsagency.com",
        pathname: "/images/**",
      }
    ],
    domains: [
      'admin.iillestfindsagency.com', // CMS domain
      'iillestfindsagency.com'       // Frontend domain
    ],
    // Keep custom loader configuration
    loader: "custom",
    loaderFile: "./src/app/utils/imageLoader.js",
  },
  
};

export default nextConfig;