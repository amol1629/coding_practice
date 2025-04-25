import React, { useEffect, useState } from 'react'

const ResizeWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	const handleWindowResize = () => {
		setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		// Add event listener to window resize
		window.addEventListener('resize', handleWindowResize)
		console.log('Resize event listener added')

		// Clean up function to remove event listener when component unmounts
		return () => {
			window.removeEventListener('resize', handleWindowResize)
			console.log('Resize event listener removed')
		}
	}, [])

	return (
		<div>
			<h1>
				Window Width is : <span>{windowWidth}px</span>{' '}
			</h1>
		</div>
	)
}

export default ResizeWindowWidth
