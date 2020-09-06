import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="weather-form">
      <form className="search-city" id="search-city">
        <input
          type="text"
          placeholder="Search for a city..."
          className="form-control"
          id="city-input"
          autoFocus="on"
          autoComplete="off"
        />
        <br />
        <input type="submit" value="search" className="btn btn-dark" />
        <input
          type="button"
          value="Current location"
          className="btn btn-light"
          id="button"
        />
      </form>
    </div>
  );
}
