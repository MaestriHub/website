/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: "dist",
  images: {
    unoptimized: true
  },
  experimental: {
    headers() {
      return [
        {
          source: "/apple-app-site-association",
          headers: [{ key: "content-type", value: "application/json" }]
        }
      ]
    }
  }
}

export default nextConfig
