import React, { useState } from "react";
import Content from "./Content.js";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <div className="col">
          {new Date(forecast.list[0].dt * 1000).getHours()}:00
          <img
            src={`http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`}
            width="64"
            alt=""
          />
          {Math.round(forecast.list[0].main.temp_max)}
          °/
          {Math.round(forecast.list[0].main.temp_min)}°
        </div>
      </div>
    );
  } else {
    let apiKey = `3e7933c2bb3dd10c446953d265fdc0d8`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return null;
  }
}
