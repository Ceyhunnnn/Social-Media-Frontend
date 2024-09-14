/** @type {import('next').NextConfig} */

let publicUrl;

if (process.env.NODE_ENV == "development") {
  publicUrl = "http://localhost:3000";
} else {
  publicUrl = "https://main--nextjs-social.netlify.app";
}
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:3001/api/",
    API_SOCKET_URL: "http://localhost:3001/",
    PUBLIC_URL: publicUrl,
    NEXTAUTH_SECRET: "Test123",
  },
};

export default nextConfig;
