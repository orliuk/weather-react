import React from "react";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div className="Weather">
      <div class="row">
        <div class="col-6">
          <div class="today-container">
            <h1 class="city"> Kyiv </h1>
            <span class="day-today"> Monday </span>
            <div>
              {" "}
              <img
                id="icon"
                src="http://openweathermap.org/img/wn/04n@2x.png"
                alt="weather icon"
              />
            </div>
            <div class="temp-today">
              <span class="temp-today">
                <span id="temp">21</span>
                <a id="celsius" href="#">
                  °C/
                </a>
                <a href="#" id="fahrenheit">
                  °F
                </a>
                <span class="emoji">🌡️</span>
              </span>
            </div>
            <br />
            <span id="description"> Cloudy </span>
          </div>
        </div>
      </div>
    </div>
  );
}
