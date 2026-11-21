import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tailwind CSS 4 through Turbopack (set up by create-next-app).
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
