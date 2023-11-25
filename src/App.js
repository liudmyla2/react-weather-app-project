import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Liudmyla Kostiuk and it is{" "}
          <a href="https://github.com/liudmyla2/react-weather-app-project">
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
