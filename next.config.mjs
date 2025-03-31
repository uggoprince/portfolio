/** @type {import('next').NextConfig} */
const nextConfig = {
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
