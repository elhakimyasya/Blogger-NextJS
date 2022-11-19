/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    images: {
        domains: ['1.bp.blogspot.com', 'blogger.googleusercontent.com', 'lh3.googleusercontent.com'],
    },
};

module.exports = nextConfig;
