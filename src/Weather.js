import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="search for a city"
          className="formContorl"
        />
        <input type="submit" value="search" className="buttom" />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Rainy</li>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
            />
            6°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation :12% </li>
              <li>Humidity: 10%</li>
              <li>Wind: 5 km/H</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
