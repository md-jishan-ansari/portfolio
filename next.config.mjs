/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'devicon.dev',
          },
          {
            protocol: 'https',
            hostname: 'www.staticcdn.technotes4u.com',
          },
        ],
    },
};

export default nextConfig;
