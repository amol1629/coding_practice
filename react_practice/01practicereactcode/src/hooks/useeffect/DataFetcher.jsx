import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
	// State to store the data fetched from the API
	const [data, setData] = useState([])
	// State to store the loading status of the data fetching
	const [loading, setLoading] = useState(false)

	// Function to fetch data from the API :
	const fetchData = async () => {
		// Set loading to true before fetching data
		setLoading(true)
		const result = await fetch(`https://fakestoreapi.com/products`)
		const data = await result.json()
		setData(data)
		// Set loading to false after data is fetched
		setLoading(false)
	}

	useEffect(() => {
		// Fetch data when the component mounts
		fetchData()
	}, [])

	return (
		<div>
			<div>
				<h3>Data Fetching</h3>
				<div className="flex-div">
					{loading ? (
						<h3>Loading...</h3>
					) : (
						<div className="card-container">
							{data.map((item) => (
								<div className="card" key={item.id}>
									<img src={item.image} alt={item.title} />
									<h4>{item.title}</h4>
									<p>{item.description}</p>
									<p>${item.price}</p>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default DataFetcher
