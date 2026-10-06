import type { NextConfig } from "next";

const config: NextConfig = {
  transpilePackages: ["@evotap/domain", "@evotap/ui"],
};
export default config;
