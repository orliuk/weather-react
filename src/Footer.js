import React from "react";
import "./App.css";
import "./index.css";
import axios from "axios";

export default function Footer() {
  return (
    <div className="Footer">
      <p id="git">
        <a href="https://github.com/orliuk/weather-react">Open-source code,</a>{" "}
        by Olga Orliuk{" "}
      </p>
      <br />
    </div>
  );
}
