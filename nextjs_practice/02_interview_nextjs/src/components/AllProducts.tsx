import { Product } from "@/type/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rating from "./Rating";

const AllProducts = async ({ allProducts }: { allProducts: Product[] }) => {
	return (
		<div className="max-h-[84vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full p-8">
			{allProducts?.map((product: Product) => (
				<div key={product?.id} className="h-full">
					<div className="flex gap-8 items-center rounded-xl shadow-lg transform hover:bg-gray-50  hover:shadow-xl p-8 h-full text-center border border-l-4 border-l-indigo-600 transition-all duration-300 ease-linear ">
						{/* Image section */}
						<div className="relative w-400 h-400 mb-4">
							<Image
								src={product?.image}
								alt={product?.title}
								className="rounded-t-xl object-contain w-full h-full hover:scale-105 transition-all duration-300 ease-linear "
								// layout="fill" // Fill the container
								width={400}
								height={400}
								sizes="100vw"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold  text-purple-800">
								{product?.title}
							</h3>

							<div className="flex justify-center items-center gap-3 my-4 ">
								<p className="px-4 py-1 bg-green-600 text-white rounded-xl font-semibold">
									$ {product?.price}
								</p>
							</div>

							<div className="flex  items-center justify-center gap-4  px-4 rounded-xl font-semibold">
								{/* Rating Component */}
								<Rating rating={product.rating.rate} />{" "}
								<p className="text-sm text-gray-600">
									({product?.rating?.count})
								</p>
							</div>

							<p className="text-gray-600 mt-4 text-balance">
								{(product?.description ?? "").slice(0, 100)}...
							</p>
							<p className="mt-8">
								<Link
									href={`/product/${product?.id}`}
									className="px-6 py-2 bg-indigo-600 text-white rounded-lg transform transition duration-200 hover:bg-indigo-700 hover:scale-105"
								>
									Learn More
								</Link>
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AllProducts;
