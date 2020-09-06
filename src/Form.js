import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

export default function Form() {
  let [city, setCity] = useState("");
  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }
  function handleSubmit(event) {
    let ApiKey = `3e7933c2bb3dd10c446953d265fdc0d8`;
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

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
          id="button"
        />
      </form>
    </div>
  );
}
