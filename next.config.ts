import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/chat": ["./syllabi/**"],
    "/syllabi": ["./syllabi/**"],
    "/syllabi/[slug]": ["./syllabi/**"],
    "/": ["./syllabi/**"],
  },
};

export default nextConfig;
