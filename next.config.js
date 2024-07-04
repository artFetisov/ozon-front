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
				source: '/uploads/:path*',
				destination: 'http://localhost:5000/uploads/:path*',
				permanent: true,
			},
		]
	},
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
				use: ['@svgr/webpack'],
			}
		)

		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
}

module.exports = nextConfig
