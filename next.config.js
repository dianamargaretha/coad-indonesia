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
			{
				source: '/:lang/product',
				destination: '/:lang/product/standard-model-c-1',
				permanent: false
			},
			{
				source: '/:lang/gallery',
				destination: '/:lang/gallery/photo/gallery-photo-high-speed-door',
				permanent: false
			},
			{
				source: '/:lang/gallery/photo',
				destination: '/:lang/gallery/photo/gallery-photo-high-speed-door',
				permanent: false
			},
			{
				source: '/:lang/blog',
				destination: '/:lang/blog/blog-highspeed-door',
				permanent: false
			},
		]
	},
}

module.exports = nextConfig
