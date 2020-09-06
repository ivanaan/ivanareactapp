import React from "react";
import "./Extras.css";

export default function Extras() {
  return (
    <div className="Extras">
      <div className="row">
        <div className="col">
          <ul className="extras">
            <li>
              Max/Min: <span id="maxTemp">28</span>/<span id="minTemp">23</span>
              °
            </li>
            <li>
              Humidity: <span id="humidity">56</span>%
            </li>
            <li>
              Wind: <span id="wind">7</span> km/h
            </li>
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
