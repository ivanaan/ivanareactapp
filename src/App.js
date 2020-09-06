import React from "react";
import Today from "./Today";
import Form from "./Form";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapcode">
          <div className="row">
            <div className="col">
              <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />

              <h2>
                <strong id="mainTemperature" className="mainTemp">
                  27
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
        </div>
      </div>
    </div>
  );
}
