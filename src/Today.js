import React, { useState } from "react";
import axios from "axios";
import "./Today.css";
export default function Today() {
  let [temperature, setTemperature] = useState("");
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  let ApiKey = `3e7933c2bb3dd10c446953d265fdc0d8`;
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

  axios.get(ApiUrl).then(showTemperature);
  return (
    <div className="container">
      <div className="wrapcode">
        <div className="row">
          <div className="col">
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
          <Today />
        </div>
        <div className="col" id="city-info">
          <h3>
            <ul className="city-list">
              <li>
                <span id="city">Prilep</span>
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
    </div>
  );
}
