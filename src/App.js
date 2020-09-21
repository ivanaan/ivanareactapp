import React, { useState } from "react";
import Forecast from "./Forecast";
import Weather from "./Weather";

import "./Form.css";
import "./Forecast.css";
import "./Extras.css";
import "./App.css";
import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Prilep");
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
      <div className="App">
        <div className="container">
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
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
            </div>
            <div className="Extras">
              <div className="row">
                <div className="col">
                  <ul className="extras">
                    <li>
                      Max/Min: <span id="maxTemp">{weatherData.maxTemp}</span>/
                      <span id="minTemp">{weatherData.minTemp}</span>°
                    </li>
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{weatherData.wind}</span> km/h
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <p id="suggestion">Make it in React-VS</p>
                  👀
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
