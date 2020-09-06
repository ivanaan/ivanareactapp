import React, { useState } from "react";
import Today from "./Today";
import Form from "./Form";
import Forecast from "./Forecast";
import Extras from "./Extras";
import axios from "axios";

import "./App.css";

export default function App() {
  let [temperature, setTemperature] = useState("");
  let [city, setCity] = useState("");
  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }
  let ApiKey = `3e7933c2bb3dd10c446953d265fdc0d8`;
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

  axios.get(ApiUrl).then(showTemperature);
  return (
    <div className="App">
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
          <Form />
          <div className="row" id="forecastSetup">
            <Forecast time="12:00" tempMax={30} tempMin={25} />
            <Forecast time="16:00" tempMax={26} tempMin={22} />
            <Forecast time="20:00" tempMax={23} tempMin={21} />
            <Forecast time="00:00" tempMax={20} tempMin={22} />
          </div>
          <Extras />
        </div>
      </div>
    </div>
  );
}
