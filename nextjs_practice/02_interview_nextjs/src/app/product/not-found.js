import Image from "next/image";
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

				<div className="text-4xl  text-center text-[#bb3939] font-bold">
					404 - Page Not Found
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;
