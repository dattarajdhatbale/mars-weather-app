import { useState } from "react";
import data from "./data/db.json";
import WeatherCard from "./components/WeatherCard";
import CitySelector from "./components/CitySelector";
import "./App.css";

function App() {

  const [selectedCity, setSelectedCity] = useState(data[0]);

  return (
    <div className="app">
      <CitySelector cities={data}   selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <WeatherCard city={selectedCity} />
    </div>
  );
}

export default App;
