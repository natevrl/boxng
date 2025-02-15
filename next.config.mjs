/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})({
  reactStrictMode: true, // Active strict mode pour détecter les problèmes potentiels
  images: {
    domains: ["www.youtube-nocookie.com"], // Permet les images/vidéos externes
    formats: ["image/avif", "image/webp"], // Formats optimisés pour les images
  },
  experimental: {
    optimizeCss: true, // Active l'optimisation CSS côté serveur
    scrollRestoration: true, // Gère la restauration du scroll
  },
});

export default nextConfig;