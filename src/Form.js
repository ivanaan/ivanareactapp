import React, { useState } from "react";
import axios from "axios";

import "./Form.css";
import "./Forecast.css";

export default function Form(props) {
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("");

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }
  function handleSubmit() {
    let ApiKey = `3e7933c2bb3dd10c446953d265fdc0d8`;
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${ApiKey}&units=metric`;

    axios.get(ApiUrl).then(showCity);
  }
  function showCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="weather-form">
      <form className="search-city" id="search-city" onSubmit={handleSubmit}>
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
        />
      </form>
    </div>
  );
}
