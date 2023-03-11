import React from "react";
import "./App.css";
import "./index.css";

export default function Header() {
  return (
    <div className="Header">
      <div class="container">
        <div class="input-group mb-3">
          <form id="search-form">
            <input type="text" class="change-city" placeholder="Change city" />
            <button type="search" class="search-button">
              {" "}
              Search
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button type="button" id="current-button">
              Location
              <i class="fa-solid fa-location-dot"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
