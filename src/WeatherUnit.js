import React, { useState } from "react";

export default function WeatherUnit(props) {
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  const [unit, setUnit] = useState("celsius");

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|{" "}
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertCelsius}>
            °C|{" "}
          </a>
          °F
        </span>
      </span>
    );
  }
}
