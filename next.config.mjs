/** @type {import('next').NextConfig} */

let publicUrl;

if (process.env.NODE_ENV == "development") {
  publicUrl = "http://localhost:3000";
} else {
  publicUrl = "https://bitplus.com.tr/";
}
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:3001/api/",
    PUBLIC_URL: publicUrl,
    NEXTAUTH_SECRET: "Test123",
  },
};

export default nextConfig;
