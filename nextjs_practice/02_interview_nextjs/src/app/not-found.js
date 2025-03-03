import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageNotFound = () => {
	return (
		<div className="min-h-screen flex flex-col gap-10 justify-center items-center text-black ">
			<div className="bg-[#fff7f7] flex flex-col gap-10 justify-center items-center p-10 rounded-lg shadow-lg shadow-red-100">
				<div>
					<Image
						src="https://cdn.vectorstock.com/i/500p/81/59/404-error-page-not-found-tiny-people-vector-51588159.jpg"
						width={300}
						height={300}
						alt="404"
						className="rounded-lg"
					/>
				</div>

				<div className="text-center flex flex-col gap-8">
					<p className="text-4xl  text-center text-[#bb3939] font-bold">
						404 - Page Not Found
					</p>
					<p className="text-red-600  ">
						Sorry, we could not find the page you were looking for.
					</p>

					<Link
						className="text-white bg-purple-500  px-4 py-2 rounded-xl hover:bg-purple-600 transition-all duration-300 ease-linear"
						href="/"
					>
						Go to Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;
