/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  // react-leaflet ships as an ES module in a way that breaks Next.js's
  // webpack bundling ("__webpack_require__.n is not a function") unless
  // it's explicitly transpiled like this.
  transpilePackages: ["react-leaflet", "@react-leaflet/core"]
};

export default nextConfig;
