import React from "react";
import "./Extras.css";

export default function Extras(props) {
  let weekDay = props.info.date.getDay();
  let suggestion = [
    `"The future is shaped by your dreams...so go back to sleep."`,
    `"Do not walk away...stare it in the eye, wave your arms and make loud noises...and slowly move towards Tuesday."`,
    `"With great power comes great electricity bill."`,
    `"Knowledge is knowing a tomato is a fruit; Wisdom is not putting it in a fruit salad 🍅."`,
    `"Haikus are easy. But sometimes they don’t make sense. Refrigerator."`,
    `"There’s just one legitimate synonym for Friday: Boom Shakalaka."`,
    `"Relax, it's the weekend! Just don't blink or it will be over."`,
  ];
  return (
    <div className="Extras">
      <div className="row">
        <div className="col-5">
          <ul>
            <li>
              Max/Min: {props.info.maxTemp}/{props.info.minTemp}°
            </li>
            <li>Humidity: {props.info.humidity} %</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>

        <div className="col-7">
          <p id="suggestion">{suggestion[weekDay]}</p>
          👀
        </div>
      </div>
    </div>
  );
}
