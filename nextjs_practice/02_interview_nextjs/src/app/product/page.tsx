import AllProducts from "@/components/AllProducts";
import React from "react";
import { getProducts } from "@/lib/products";

const ProductPage = async () => {
	const allProducts = await getProducts();

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			{/* Header Section */}
			<header className="  p-8 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center">
				Welcome to Products Page
			</header>

			{/* Scrollable Products Section */}
			<main className="flex-grow overflow-y-auto  ">
				<div className="w-full mx-auto bg-white rounded-xl shadow-lg px-8 ">
					<AllProducts allProducts={allProducts} />
				</div>
			</main>
		</div>
	);
};

export default ProductPage;
