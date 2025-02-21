import { getSingleProducts } from "@/lib/products";
import Rating from "@/components/Rating"; // Assuming you've imported the Rating component
import React from "react";
import Image from "next/image"; // Import next/image

const SingleProduct = async ({ params }: { params: { id: string } }) => {
	const { id } = await params;

	const result = await getSingleProducts(id);

	console.log("id: ", result);

	// Destructure the product details
	const { title, price, description, image, rating } = result;

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
			<div className="max-w-4xl bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Left side: Product Image */}
					<div className="relative w-full h-96 overflow-hidden rounded-xl">
						<Image
							src={image} // Using Next.js Image component
							alt={title}
							layout="responsive"
							width={500} // Set appropriate width
							height={500} // Set appropriate height
							className="object-contain w-full h-full transition duration-500 transform hover:scale-105"
						/>
					</div>

					{/* Right side: Product Information */}
					<div className="flex flex-col justify-between">
						<h2 className="text-3xl font-semibold text-purple-900 mb-4">
							{title}
						</h2>
						<p className="text-lg text-gray-600 mb-4">
							{description}
						</p>

						{/* Rating Component */}
						<div className="flex items-center space-x-2 mb-4">
							<Rating rating={rating?.rate} />
							<span className="text-gray-600">
								({rating?.count} reviews)
							</span>
						</div>

						<div className="flex items-center justify-between">
							<span className="text-2xl font-bold text-purple-900">
								${price}
							</span>
							<button className="bg-indigo-600 text-white py-2 px-6 rounded-lg transform transition duration-200 hover:bg-indigo-700 hover:scale-105">
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
