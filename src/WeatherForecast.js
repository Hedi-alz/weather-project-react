import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={32} />
            <div className="forecastTemperature">
              <span className="forecast-temperature-max">
                {Math.round(forecast[0].temp.max)}
              </span>{" "}
              <span className="forecast-temperature-min">
                {Math.round(forecast[0].temp.min)}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
