import React from 'react';
import "./WeatherCard.css";


const WeatherCard = ({ city }) => {
  return (
   <div className="weather-card" style={{ "--theme-color": city.theme }}>
      <div className="card-header">
        <div className="city-name">{city.name}</div>
        <div className="region">{city.region}</div>
      </div>
    <div className="stats">
        <div className="stat-box">
          <div className="stat-label">Temperature</div>
          <div className="stat-value">{city.temp}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Dust Level</div>
          <div className="stat-value">{city.dustLevel}</div>
        </div>
      </div>

      <div className="advisory-section">
        <h2>Life Support Guide</h2>
        <p>{city.advisory}</p>
      </div>
    </div>
  );
};

export default WeatherCard;