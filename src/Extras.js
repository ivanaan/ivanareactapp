import React from "react";
import "./Extras.css";

export default function Extras(props) {
  return (
    <div className="Extras">
      <div className="row">
        <div className="col">
          <ul className="extras">
            <li>
              Max/Min: {props.info.maxTemp}/{props.info.minTemp}°
            </li>
            <li>Humidity: {props.info.humidity} %</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>

        <div className="col">
          <p id="suggestion">Make it in React-VS</p>
          👀
        </div>
      </div>
    </div>
  );
}
