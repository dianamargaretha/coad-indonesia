/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', '195.35.14.168', 'highspeeddoorindonesiacoad.com'],
    },
	async redirects() {
		return [
			{
				source: '/wordpress/tag',
				destination: '/',
				permanent: false
			},
			{
				source: '/wordpress/tag/:slug',
				destination: '/',
				permanent: false
			},
		]
	},
}

module.exports = nextConfig
