/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', '195.35.14.168'],
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            tls: false,
            net: false,
            dns: false
        };

        return config;
    },
}

module.exports = nextConfig
