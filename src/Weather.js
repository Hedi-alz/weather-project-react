import React, { useState } from "react";
import axios from "axios";
import Currentdate from "./Currentdate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "2daf65f0cdaa917f11026e8a128ce271";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 search">
              <input
                type="search"
                placeholder="search for a city"
                className="form-control"
                onChange={handleChange}
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
        <ul className="data">
          <li>
            <Currentdate date={weather.date} />
          </li>
          <li>{weather.description}</li>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <div className="float-left">
                  <div className="icon">
                    <WeatherIcon code={weather.icon} size={42} />
                  </div>
                </div>
                <WeatherUnit celsius={weather.temperature} />
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
        <WeatherForecast coord={weather.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
