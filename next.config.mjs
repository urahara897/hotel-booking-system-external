/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "toxjooopnzrsjsekjdrw.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy route on your Next.js app
        destination: "https://toxjooopnzrsjsekjdrw.supabase.co/:path*", // External API base URL
      },
    ];
  },
};

export default nextConfig;
