/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only run ESLint on these directories during production builds
    dirs: ['src'],
    // Ignore ESLint errors during builds to prevent circular structure issues
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'homespace.vercel.app',
        port: '',
        pathname: '/**/**',
        search: '',
      },
    ],
  }
};

export default nextConfig;
