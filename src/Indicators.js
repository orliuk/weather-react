import React from "react";
import "./App.css";
import "./index.css";
import axios from "axios";

export default function Indicators() {
  return (
    <div className="Indicators">
      <div class="col-6">
        <div class="indicators">
          <div class="row">
            <div class="col">
              {" "}
              Pressure: <span id="pressure">1030</span>Pa
            </div>
            <br />
            <div class="col">
              {" "}
              Wind: <span id="wind">2</span>km/hour
            </div>
            <br />
            <div class="col">
              {" "}
              Humidity: <span id="humidity">80</span>%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
