import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return props.celsius * 1.8 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong> {Math.round(props.celsius)}</strong>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <strong> {Math.round(fahrenheit())}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
