import React, { useState } from "react";

const CirlceClick = () => {
	const [circle, setCircle] = useState([]);

	const handleScreenClick = (e) => {
		const newCircle = {
			id: crypto.randomUUID(),
			x: e.clientX,
			y: e.clientY,
			bgColor: "pink",
		};

		setCircle([...circle, newCircle]);
	};

	const handleCircleClick = (id) => {
		setCircle((prev) =>
			prev.map((circle) =>
				circle.id === id
					? {
							...circle,
							bgColor:
								circle.bgColor === "pink"
									? "transparent"
									: "pink",
					  }
					: circle
			)
		);
	};

	return (
		<div
			className=" "
			style={{
				height: "100vh",
				width: "100vw",
			}}
			onClick={handleScreenClick}
		>
			{circle.map((cir) => (
				<div
					key={cir.id}
					onClick={(e) => {
						e.stopPropagation();
						handleCircleClick(cir.id);
					}}
					style={{
						position: "absolute",
						width: "80px",
						height: "80px",
						top: cir.y - 25,
						left: cir.x - 25,
						borderRadius: "50%",
						border: "2px solid black",
						backgroundColor: cir.bgColor,
					}}
				/>
			))}
			<div />
		</div>
	);
};

export default CirlceClick;
