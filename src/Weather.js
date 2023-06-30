import React, { useState } from "react";
import axios from "axios";
import Currentdate from "./Currentdate";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
    });
  }

  if (weather.ready) {
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
        <h1>{weather.city}</h1>
        <ul>
          <li>
            <Currentdate date={weather.date} />
          </li>
          <li>{weather.description}</li>
          <div className="row mt-3">
            <div className="col-6">
              <div className="icon">
                <img src={weather.iconUrl} alt="weather icon" />

                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind} km/H</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    const apiKey = "2daf65f0cdaa917f11026e8a128ce271";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
