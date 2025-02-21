import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static.vecteezy.com",
			},
			{
				protocol: "https",
				hostname: "www.postplanner.com",
			},
			{
				protocol: "https",
				hostname: "media.istockphoto.com",
			},
			{
				protocol: "https",
				hostname: "img.freepik.com",
			},
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
			},
			{
				protocol: "https",
				hostname: "lloremflickr.com",
			},
		],
	},
};

export default nextConfig;
