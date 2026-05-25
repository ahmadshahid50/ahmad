import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  // Ensure Turbopack resolves the correct workspace root when running from
  // subdirectories (fixes: "couldn't find the Next.js package from the project directory")
  turbopack: {
    root: path.resolve('.')
  }
};

export default nextConfig;
