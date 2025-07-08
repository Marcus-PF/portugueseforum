/** @type {import('next').NextConfig} */
const nextConfig = {
  // Nx-specific options
  nx: {
    svgr: false,
  },
};

// Nx plugin for Next.js
import { withNx } from '@nx/next';

export default withNx(nextConfig);