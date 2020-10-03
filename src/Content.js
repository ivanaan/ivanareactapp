import React, { useState } from "react";
import Forecast from "./Forecast";
import Weather from "./Weather";
import Extras from "./Extras.js";
import axios from "axios";
import "./Form.css";
import "./Extras.css";
import "./Content.css";
export default function Content(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let ApiKey = `3e7933c2bb3dd10c446953d265fdc0d8`;
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(showTemperature);
  }
  function handleForm(event) {
    event.preventDefault();
    search();
  }
  function showCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="wrapcode">
        <div className="weather-form" onSubmit={handleForm}>
          <Weather data={weatherData} />
          <form className="search-city" id="search-city">
            <input
              type="text"
              placeholder="Search for a city..."
              className="form-control"
              id="city-input"
              autoFocus="on"
              autoComplete="off"
              onChange={showCity}
            />
            <br />
            <input type="submit" value="search" className="btn btn-dark" />
            <input
              type="button"
              value="Current location"
              className="btn btn-light"
              id="button"
            />
          </form>
        </div>
        <div className="row" id="forecastSetup">
          <Forecast city={weatherData.city} />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
        <Extras info={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
