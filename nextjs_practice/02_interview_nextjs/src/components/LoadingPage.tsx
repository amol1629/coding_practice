import React from "react";

const LoadingPage = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="flex flex-col items-center justify-center space-y-4">
				<div className="animate-spin rounded-full border-4 border-t-4 border-indigo-600 h-16 w-16"></div>
				<p className="text-xl font-semibold text-gray-700">
					Loading...
				</p>
			</div>
		</div>
	);
};

export default LoadingPage;
