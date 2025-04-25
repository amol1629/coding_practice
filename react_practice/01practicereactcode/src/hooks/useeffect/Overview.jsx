import React, { useEffect, useState } from 'react'

const UseEffectOverview = () => {
	// State to store the count value
	const [count, setCount] = useState(0)

	// Function to increment the count by 1
	const incrementCount = () => {
		setCount((prev) => prev + 1)
	}

	// useEffect hook to perform side effects in the component. It runs after the provided dependencies changes.
	useEffect(() => {
		console.log('I have updated the count : ', count)

		// Clean up function to clear previous count value and update the count with new value
		return () => console.log('I am cleanup function : ', count)
	}, [count])

	return (
		<div>
			<div className="flex-div">
				<h3>
					Count : <span>{count}</span>{' '}
				</h3>

				<button onClick={incrementCount}>Increment</button>
			</div>
		</div>
	)
}

export default UseEffectOverview
