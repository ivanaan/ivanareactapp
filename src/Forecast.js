import React, { useState } from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays.js";
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
      <div className="ForecastSetup row">
        {forecast.list.slice(0, 5).map(function (forecastItem) {
          return <ForecastDays data={forecastItem} />;
        })}
      </div>
    );
  } else {
    let apiKey = `3e7933c2bb3dd10c446953d265fdc0d8`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return null;
  }
}
