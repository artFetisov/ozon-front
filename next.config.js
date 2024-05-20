/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ir.ozone.ru',
			},
			{
				protocol: 'https',
				hostname: 'ir-2.ozone.ru',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
