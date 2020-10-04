import React from "react";
import "./ForecastDays.css";

export default function CurrentLocationDays(props) {
  return (
    <div className="ForecastDays col">
      {new Date(props.data.dt * 1000).getHours()}:00
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        width="64"
        alt=""
      />
      {Math.round(props.data.main.temp_max)}
      °/
      {Math.round(props.data.main.temp_min)}°
    </div>
  );
}
