/**
 * Problem Statement : From the given array, display the countries name in dropdown and in next dropdown display the respective cities from that country.
 *
 */

import { useState } from "react";
import "./App.css";

function App() {
	const [cities, setCities] = useState([]); // Initialize as an array
	const countries = [
		{ name: "India", value: "IN", cities: ["Mumbai", "Delhi"] },
		{ name: "Pakistan", value: "PK", cities: ["Karachi", "Lahore"] },
		{ name: "Bangladesh", value: "BAN", cities: ["Dhaka", "Chittagong"] },
		{
			name: "United States of America",
			value: "USA",
			cities: ["California", "New York"],
		},
	];

	const displayCityNames = (countryValue) => {
		const selectedCountry = countries.find(
			(country) => country.value === countryValue
		);
		if (selectedCountry) {
			console.log("City Names:", selectedCountry.cities);
			setCities(selectedCountry.cities);
		}
	};

	return (
		<div>
			<div>
				<select onChange={(e) => displayCityNames(e.target.value)}>
					<option defaultValue="Selected">Select the country</option>
					{countries.map((country) => (
						<option key={country.value} value={country.value}>
							{country.name}
						</option>
					))}
				</select>

				<select>
					{cities.map((city) => (
						<option key={city} value={city}>
							{city}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default App;
