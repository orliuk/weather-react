import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import App from "./App";
import Indicators from "./Indicators";
import Forecast from "./Forecast";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Indicators />
    <Forecast />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
