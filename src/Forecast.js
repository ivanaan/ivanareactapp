import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="col">
        <span id="time-one">{props.time}</span> <br />
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          width="52"
          alt="time-one"
          id="img-one"
        />
        <br />
        <span id="temp-max1">{props.tempMax}</span>°/
        <span id="temp-min1">{props.tempMin}</span>°
      </div>
    </div>
  );
}
