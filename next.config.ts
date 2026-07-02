import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "dmvtaxresolution.com" }],
        destination: "https://www.dmvtaxresolution.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
