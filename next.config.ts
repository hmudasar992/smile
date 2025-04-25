import type { NextConfig } from "next";

const isDocker = process.env.DOCKER_ENV === "true";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: isProduction
          ? "admin.iillestfindsagency.com"
          : "localhost",
        port: isProduction ? "" : "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "iillestfindsagency.com",
        pathname: "/images/**",
      },
    ],
    domains: [
      isProduction
        ? "admin.iillestfindsagency.com"
        : "localhost",
      "iillestfindsagency.com",
    ],
    loader: "custom",
    loaderFile: "./src/app/utils/imageLoader.js",
  },

  experimental: {
    // disable the multi-threaded build worker
    workerThreads: false,
    webpackBuildWorker: false,
  },
};

export default nextConfig;
