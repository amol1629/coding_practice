import { useState } from "react";

const ClickableCircles = () => {
	const [circles, setCircles] = useState([]);

	// Function to add a new circle at click position
	const handleClick = (e) => {
		const newCircle = {
			id: crypto.randomUUID(), // Unique ID
			x: e.clientX, // X-coordinate of click
			y: e.clientY, // Y-coordinate of click
			bgColor: "blue", // Initial color
		};
		setCircles([...circles, newCircle]);
	};

	// Function to remove background color when a circle is clicked
	const handleCircleClick = (id) => {
		setCircles((prevCircles) =>
			prevCircles.map((circle) =>
				circle.id === id
					? {
							...circle,
							bgColor:
								circle.bgColor === "blue"
									? "transparent"
									: "blue",
					  }
					: circle
			)
		);
	};

	return (
		<div className="w-screen h-screen bg-gray-100" onClick={handleClick}>
			{circles.map((circle) => (
				<div
					key={circle.id}
					onClick={(e) => {
						e.stopPropagation(); // Prevent triggering background click
						handleCircleClick(circle.id);
					}}
					style={{
						position: "absolute",
						left: circle.x - 25,
						top: circle.y - 25,
						width: "50px",
						height: "50px",
						borderRadius: "50%",
						backgroundColor: circle.bgColor,
						border: "2px solid black",
						cursor: "pointer",
					}}
				/>
			))}
		</div>
	);
};

export default ClickableCircles;
