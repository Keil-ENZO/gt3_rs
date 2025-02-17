/** @type {import('next').NextConfig} */
import withFonts from "next-fonts";

const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
    minimumCacheTTL: 60,
  },
  output: "standalone",
};

export default withFonts(nextConfig);
