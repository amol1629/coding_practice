import { useState } from "react";
import Button from "../../ui/Button";

export default function WithoutUseMemo({ num }) {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		console.log("Increment Counter");
		setCount((prev) => prev + 1);
	};

	const expensiveCalculation = () => {
		console.log("Expensive Calculation");
		let tempCount = 0;
		for (let i = 0; i <= num; i++) {
			tempCount += 1;
		}
		return tempCount;
	};

	return (
		<div>
			<h1>Count : {count}</h1>

			<Button onClick={incrementCount}>Increment Count</Button>

			<h1>Value : {expensiveCalculation()}</h1>

			{/* <Button onClick={expensiveCalculation}>Increment Value</Button> */}
		</div>
	);
}
