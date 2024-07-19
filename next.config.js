/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
          ],
        ...withPWA({
            dest: 'public',
            register: true,
            skipWaiting: true,
            disable: process.env.NODE_ENV === 'development'
        })
    }
};

module.exports = nextConfig;
