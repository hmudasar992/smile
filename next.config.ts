import type { NextConfig } from "next";

// Determine if we're running in Docker/Production
const isDocker = process.env.DOCKER_ENV === "true";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: isProduction ? "admin.iillestfindsagency.com" : "localhost",
        port: isProduction ? "" : "1337", // Strapi default port
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "iillestfindsagency.com",
        pathname: "/images/**",
      },
    ],
    domains: [
      isProduction ? "admin.iillestfindsagency.com" : "localhost",
      "iillestfindsagency.com",
    ],
    loader: "custom",
    loaderFile: "./src/app/utils/imageLoader.js",
  },
  // Only include valid experimental options
  experimental: {
    workerThreads: true,
    // Other valid experimental options:
    // optimizeCss: true,
    // scrollRestoration: true,
    // externalDir: true,
    // serverComponentsExternalPackages: ['package-name'],
  },
};

export default nextConfig;
