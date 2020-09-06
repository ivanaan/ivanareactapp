import React, { useState } from "react";
import "./Today.css";
import "./Form.css";
import "./Forecast.css";
import "./Extras.css";
import "./App.css";
import axios from "axios";

export default function App() {
  let [temperature, setTemperature] = useState("");
  let [city, setCity] = useState("");
  let [minTemp, setMinTemp] = useState("");
  let [maxTemp, setMaxTemp] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setMinTemp(Math.round(response.data.main.temp_min));
    setMaxTemp(Math.round(response.data.main.temp_max));
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
  }

  function showForecast(response) {}
  function handleForm(event) {
    event.preventDefault();
    let ApiKey = `3e7933c2bb3dd10c446953d265fdc0d8`;
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

    axios.get(ApiUrl).then(showTemperature);

    ApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(showForecast);
  }
  function showCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="wrapcode">
          <div className="row">
            <div className="col-6">
              <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />

              <h2>
                <strong id="mainTemperature" className="mainTemp">
                  {temperature}
                </strong>
                <sup>
                  <a href="/" id="celsius" className="active">
                    °C
                  </a>{" "}
                  |
                  <a href="/" id="fahrenheit">
                    °F
                  </a>
                </sup>
              </h2>
            </div>

            <div className="col-6" id="city-info">
              <h3>
                <ul className="city-list">
                  <li>
                    <span id="city">{city}</span>
                    <br />
                  </li>
                  <li>
                    <small id="today-date">24 Oct, Fri 01:15</small>
                  </li>
                  <br />
                  <li>
                    <span id="description">Clear sky</span>
                  </li>
                </ul>
              </h3>
            </div>
          </div>
          <div className="weather-form">
            <form
              className="search-city"
              id="search-city"
              onSubmit={handleForm}
            >
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
            <div className="Forecast">
              <div className="col">
                <span id="time-one"></span> <br />
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  width="52"
                  alt="time-one"
                  id="img-one"
                />
                <br />
                <span id="temp-max1"></span>°/
                <span id="temp-min1"></span>°
              </div>
            </div>
          </div>
          <div className="Extras">
            <div className="row">
              <div className="col">
                <ul className="extras">
                  <li>
                    Max/Min: <span id="maxTemp">{maxTemp}</span>/
                    <span id="minTemp">{minTemp}</span>°
                  </li>
                  <li>
                    Humidity: <span id="humidity">{humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{wind}</span> km/h
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
}
