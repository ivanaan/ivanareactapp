import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <strong id="mainTemperature" className="mainTemp">
          {props.celsius}
        </strong>
        <sup>
          <a href="/" id="celsius" className="active">
            °C
          </a>{" "}
          |
          <a href="/" id="fahrenheit" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </sup>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temperature">
        <strong id="mainTemperature" className="mainTemp">
          {Math.round(fahrenheit)}
        </strong>
        <sup>
          <a href="/" id="celsius" onClick={showCelsius}>
            °C
          </a>{" "}
          |
          <a href="/" id="fahrenheit" className="active">
            {" "}
            °F
          </a>
        </sup>
      </div>
    );
  }
}
