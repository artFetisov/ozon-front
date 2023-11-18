/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ir.ozone.ru',
			},
		],
	},
}

module.exports = nextConfig
