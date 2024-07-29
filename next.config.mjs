/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.fbcdn.net",
				pathname: "/**"
			}
		]
	},
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};

export default nextConfig;
