import React, { useEffect, useState } from 'react'

const MultipleUseEffects = () => {
	const [count, setCount] = useState(0)
	const [timer, setTimer] = useState(0)

	const incrementCount = () => {
		setCount((prev) => prev + 1)
	}

	useEffect(() => {
		console.log('Count changed:', count)
	}, [count])

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimer((prev) => prev + 1)
		}, 1000)
		console.log('Timer started')

		// Clean up function to clear the interval when the component unmounts
		return () => {
			console.log('Timer interval cleared')
			clearInterval(intervalId)
		}
	}, [])

	return (
		<div>
			<h3>Count : {count}</h3>

			<button onClick={incrementCount}>Increment Count</button>

			<h3>Timer : {timer}</h3>
		</div>
	)
}

export default MultipleUseEffects
