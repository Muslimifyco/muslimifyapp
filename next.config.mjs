/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	images: {
		unoptimized: true,
		domains: [
			"res.cloudinary.com",
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"via.placeholder.com",
			"developers.google.com",
		],
	},
	env: {
		NEXTAUTH_SECRET: "b51afa1ed38dde0d5d8f21gftybjsygg458086548a7fe48e1a",
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dev-empty",
		NEXT_CLOUDINARY_PRESET: "vikings",
	},
};

export default nextConfig;
