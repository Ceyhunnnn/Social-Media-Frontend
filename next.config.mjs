/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:3001/api/",
    PUBLIC_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "Test123",
  },
};

export default nextConfig;
