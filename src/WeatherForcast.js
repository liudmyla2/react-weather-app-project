import React from "react";
import "./WeatherForecast.css"

export default function WeatherForcast() {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <div className="d-flex">
            <img
              src=""
              alt=""
            ></img>
            </div>
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-min">19°</span>
              <span className="WeatherForecast-temperature-max">20°</span>
            </div>
          </div>
        </div>
      </div>
    );
}