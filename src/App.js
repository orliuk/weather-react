import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          <a href="https://github.com/orliuk/weather-react">
            Open-source code,
          </a>{" "}
          by Olga Orliuk{" "}
        </footer>
      </div>
    </div>
  );
}
