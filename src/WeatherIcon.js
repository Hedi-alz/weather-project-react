import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "PCLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_NIGHT",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_NIGHT",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "010d": "RAIN",
    "010n": "RAIN",
    "011d": "RAIN",
    "011n": "RAIN",
    "013d": "SNOW",
    "013n": "SNOW",
    "050d": "FOG",
    "050n": "FOGs",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="blue"
      size={props.size}
      animate={true}
    />
  );
}
