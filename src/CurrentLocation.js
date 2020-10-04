import React, { useState } from "react";
import axios from "axios";
import CurrentLocationDays from "./CurrentLocationDays.js";
import "./Forecast.css";

export default function CurrentLocation(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    console.log(response);
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.data.city === data.city) {
    return (
      <div className="ForecastSetup row">
        {forecast.list.slice(0, 5).map(function (forecastItem) {
          return <CurrentLocationDays data={forecastItem} />;
        })}
      </div>
    );
  } else {
    let apiKey = `3e7933c2bb3dd10c446953d265fdc0d8`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.data.lat}&lon=${props.data.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return null;
  }
}
