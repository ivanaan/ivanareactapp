import React from "react";
import "./Today.css";
export default function Today() {
  return (
    <div className="col" id="city-info">
      <h3>
        <ul className="city-list">
          <li>
            <span id="city">Prilep</span>
            <br />
          </li>
          <li>
            <small id="today-date">24 Oct, Fri 01:15</small>
          </li>
          <br />
          <li>
            <span id="description">Clear sky</span>
          </li>
        </ul>
      </h3>
    </div>
  );
}
