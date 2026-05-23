import React from 'react'
import "./CitySelector.css";

const CitySelector = ({ cities,selectedCity, setSelectedCity }) => {
  return (
    <div className="city-selector">
        <h2>Mars Cities</h2>
      {cities.map((city) => (
        <div
          key={city.id}
          className={`city-item ${selectedCity.id === city.id ? "active" : ""}`}
         /* style={selectedCity.id === city.id ? { borderLeftColor: city.theme } : {}} */
          onClick={() => setSelectedCity(city)}
        >
          {city.name}
        </div>
      ))}
    </div>
  );
};

export default CitySelector