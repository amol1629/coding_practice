import { useState } from "react";

export default function App() {
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(""); // State for selected country
  const [selectedCity, setSelectedCity] = useState(""); // State for selected city

  const countries = [
    { name: "India", value: "IN", cities: ["Mumbai", "Pune"] },
    { name: "Bangladesh", value: "BAN", cities: ["Dhaka", "Chattigoan"] },
    { name: "Pakistan", value: "PAK", cities: ["Karachi", "Lahore"] },
  ];

  const displayCitiesName = (e) => {
    const value = e.target.value;
    const selectedCountryData = countries.find(
      (country) => country.value === value
    );
    if (selectedCountryData) {
      setSelectedCountry(selectedCountryData.name); // Update selected country
      setCities(selectedCountryData.cities);
      setSelectedCity(""); // Reset city selection
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value); // Update selected city
  };

  return (
    <div className="App">
      <div>
        <select onChange={displayCitiesName} defaultValue="Select the country">
          <option value="" disabled>
            Select the country
          </option>
          {countries.map((country) => (
            <option value={country.value} key={country.value}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {cities.length > 0 && (
        <div style={{ margin: "10px" }}>
          <select onChange={handleCityChange} value={selectedCity}>
            <option value="" disabled>
              Select a city
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedCountry && selectedCity && (
        <div style={{ marginTop: "20px" }}>
          <strong>Selected Country:</strong> {selectedCountry}
          <br />
          <strong>Selected City:</strong> {selectedCity}
        </div>
      )}
    </div>
  );
}
