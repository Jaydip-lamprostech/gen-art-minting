/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gateway.lighthouse.storage",
        port: "",
      },
    ],
  },
};

export default nextConfig;
