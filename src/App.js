import React, { useState } from "react";
import Forecast from "./Forecast";
import "./Today.css";
import "./Form.css";
import "./Forecast.css";
import "./Extras.css";
import "./App.css";
import axios from "axios";

export default function App() {
  let [temperature, setTemperature] = useState("20");
  let [city, setCity] = useState("Prilep");
  let [minTemp, setMinTemp] = useState("");
  let [maxTemp, setMaxTemp] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [forecast, setForecast] = useState("");
  let Now = new Date();
  function FormatDate(timestamp) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let Today = Now.getDate();
    if (Today < 10) {
      Today = `0${Today}`;
    }
    let Day = days[Now.getDay()];

    let Months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let Month = Months[Now.getMonth()];
    return `${Today} ${Month}, ${Day} ${FormatTime(timestamp)}`;
  }
  function FormatTime(timestamp) {
    let Hours = Now.getHours();
    let Min = Now.getMinutes();
    if (Hours < 10) {
      Hours = `0${Hours}`;
    }
    if (Min < 10) {
      Min = `0${Min}`;
    }
    return `${Hours}:${Min}`;
  }

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setMinTemp(Math.round(response.data.main.temp_min));
    setMaxTemp(Math.round(response.data.main.temp_max));
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
  }

  function handleForm(event) {
    event.preventDefault();
    let ApiKey = `3e7933c2bb3dd10c446953d265fdc0d8`;
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

    axios.get(ApiUrl).then(showTemperature);
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
                    <small id="today-date"> {FormatDate()}</small>
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
