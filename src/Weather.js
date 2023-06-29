import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState("");

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.temperature.current);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="search for a city"
                className="form-contorl"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>London</h1>
        <ul>
          <li>Wednesday 7:00</li>
          <li>Rainy</li>
          <div className="row mt-3">
            <div className="col-6">
              <div className="icon">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weather icon"
                />

                <span className="temperature">{Math.round(temperature)}</span>
                <span className="unit">°C</span>
              </div>
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
  } else {
    const apiKey = "49f7b3d442aeb8o7d9b6atfa6542c50f";
    let city = "london";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
