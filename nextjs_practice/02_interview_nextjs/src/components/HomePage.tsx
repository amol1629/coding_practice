import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomePage() {
	return (
		<div>
			{/* Hero Section */}
			<section className="text-center mb-12">
				<div className="p-8 mx-auto my-8 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
					Welcome to Our Modern Web Experience
				</div>
				<div className="text-lg text-gray-600 max-w-2xl mx-auto">
					Discover our amazing products, books, and posts. Stay
					up-to-date with the latest content and offerings!
				</div>
			</section>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center text-center">
				{/* Products Section */}
				<section>
					<h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
						Our Products
					</h2>
					<div className="">
						<div className="bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
							<Image
								src={
									"https://static.vecteezy.com/system/resources/thumbnails/040/306/226/small/ai-generated-elegant-cosmetic-products-background-photo.jpeg"
								}
								alt="Product Image"
								className="rounded-t-xl h-32 w-32 mx-auto"
								height={128}
								width={128}
								sizes="100vw"
								// Make the image display full width
								style={{
									width: "100%",
									height: "auto",
								}}
							/>
							<div className="p-4">
								<h3 className="text-xl font-semibold text-gray-800">
									Product
								</h3>
								<p className="text-gray-600 mt-4">
									A description of our amazing product .
								</p>

								<p className="mt-8 mb-4 ">
									<Link
										href="/product"
										className="px-6 py-2 bg-indigo-600 text-white rounded-lg transform transition duration-200 hover:bg-indigo-700 hover:scale-105"
									>
										Learn More
									</Link>
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Books Section */}
				<section>
					<h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
						Books You Should Read
					</h2>
					<div className="">
						<div className="bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
							<Image
								src={
									"https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small_2x/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg"
								}
								alt="Book Image"
								className="rounded-t-xl h-32 w-32 mx-auto"
								height={128}
								width={128}
								sizes="100vw"
								// Make the image display full width
								style={{
									width: "100%",
									height: "auto",
								}}
							/>
							<div className="p-4">
								<h3 className="text-xl font-semibold text-gray-800">
									Book
								</h3>
								<p className="text-gray-600 mt-4">
									A description of our amazing books .
								</p>

								<p className="mt-8 mb-4 ">
									<Link
										href="/book"
										className="px-6 py-2 bg-indigo-600 text-white rounded-lg transform transition duration-200 hover:bg-indigo-700 hover:scale-105"
									>
										Learn More
									</Link>
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Posts Section */}
				<section>
					<h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
						Latest Posts
					</h2>
					<div className="">
						<div className="bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
							<Image
								src={
									"https://www.postplanner.com/hubfs/what-to-post-on-instagram.png"
								}
								alt="Post Image"
								className="rounded-t-xl h-32 w-32 mx-auto"
								height={128}
								width={128}
								sizes="100vw"
								// Make the image display full width
								style={{
									width: "100%",
									height: "auto",
								}}
							/>
							<div className="p-4">
								<h3 className="text-xl font-semibold text-gray-800">
									Posts
								</h3>
								<p className="text-gray-600 mt-4">
									A description of our amazing posts .
								</p>

								<p className="mt-8 mb-4 ">
									<Link
										href="/post"
										className="px-6 py-2 bg-indigo-600 text-white rounded-lg transform transition duration-200 hover:bg-indigo-700 hover:scale-105"
									>
										Learn More
									</Link>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
