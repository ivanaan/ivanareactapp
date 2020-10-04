import React from "react";
import "./Today.css";
export default function Today(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let Today = props.date.getDate();
  if (Today < 10) {
    Today = `0${Today}`;
  }
  let Day = days[props.date.getDay()];

  let Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let Month = Months[props.date.getMonth()];
  let Hours = props.date.getHours();
  let Min = props.date.getMinutes();
  if (Hours < 10) {
    Hours = `0${Hours}`;
  }
  if (Min < 10) {
    Min = `0${Min}`;
  }
  return (
    <div>
      {Today} {Month}, {Day}, {Hours}:{Min}
    </div>
  );
}
