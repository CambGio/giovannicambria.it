import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return ["mappa", "workshop", "affiancamento"].map((s) => ({
      source: `/lavoro/${s}`,
      destination: `/lavoro#${s}`,
      permanent: true, // 308
    }));
  },
};

export default nextConfig;
