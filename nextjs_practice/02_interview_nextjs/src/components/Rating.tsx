"use client"; // Convert to Client Component

import React from "react";
import { Star, StarHalf } from "lucide-react";

interface RatingProps {
	rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
	const fullStars = Math.floor(rating); // Full stars
	const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star if applicable
	const emptyStars = 5 - fullStars - halfStars; // Remaining empty stars

	return (
		<div className="flex items-center space-x-1">
			{/* Full Stars */}
			{[...Array(fullStars)].map((_, i) => (
				<Star
					key={`full-${i}`}
					className="text-yellow-400 fill-yellow-400 w-6 h-6 transition-all hover:scale-110"
				/>
			))}

			{/* Half Star */}
			{halfStars === 1 && (
				<StarHalf className="text-yellow-400 fill-yellow-400 w-6 h-6 transition-all hover:scale-110" />
			)}

			{/* Empty Stars */}
			{[...Array(emptyStars)].map((_, i) => (
				<Star
					key={`empty-${i}`}
					className="text-gray-300 w-6 h-6 transition-all hover:scale-110"
				/>
			))}
		</div>
	);
};

export default Rating;
