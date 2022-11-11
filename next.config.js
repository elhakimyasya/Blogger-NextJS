/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    images: {
        domains: ['1.bp.blogspot.com', 'blogger.googleusercontent.com', 'lh3.googleusercontent.com'],
    },
};

(module.exports = nextConfig),
    withPWA({
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        register: true,
        skipWaiting: true,
        runtimeCaching,
        buildExcludes: [/middleware-manifest.json$/],
    });
