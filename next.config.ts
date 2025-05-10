import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			bodySizeLimit: '2mb',
			allowedOrigins: [],
		},
	},
	output: 'standalone',
}

export default nextConfig
