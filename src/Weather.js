import React from "react";
import Today from "./Today.js";
import Temperature from "./Temperature.js";

export default function Weather(props) {
  return (
    <div className="row">
      <div className="col-6">
        <img
          src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
          alt=""
        />

        <h2>
          <Temperature celsius={props.data.temperature} />
        </h2>
      </div>

      <div className="col-6" id="city-info">
        <h3>
          <ul className="city-list">
            <li>
              <span id="city">{props.data.city}</span>
              <br />
            </li>
            <li>
              <small id="today-date">
                {" "}
                <Today date={props.data.date} />
              </small>
            </li>
            <br />
            <li>
              <span id="description">{props.data.description}</span>
            </li>
          </ul>
        </h3>
      </div>
    </div>
  );
}
