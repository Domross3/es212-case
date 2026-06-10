import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/chat": ["./syllabi/**"],
  },
};

export default nextConfig;
