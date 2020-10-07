import React from "react";
import Today from "./Today.js";
import Temperature from "./Temperature.js";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="row">
      <div className="col-5" id="mainTemp">
        <img
          src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
          alt=""
        />
        <h2>
          <Temperature celsius={props.data.temperature} />
        </h2>
      </div>

      <div className="col-7" id="city-info">
        <h3>
          <ul className="city-list">
            <li className="city">
              {props.data.city}
              <br />
            </li>
            <li>
              <small id="today-date">
                {" "}
                <Today date={props.data.date} />
              </small>
            </li>

            <li id="description">{props.data.description}</li>
          </ul>
        </h3>
      </div>
    </div>
  );
}
