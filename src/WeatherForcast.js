import React from "react";
import "./WeatherForcast.css"

export default function WeatherForcast() {
    return (
      <div className="WeatherForcast">
        <div className="row">
          <div className="col">
            <div className="WeatherForcast-day">Thu</div>
            <div className="d-flex">
            <img
              src=""
              alt=""
            ></img>
            </div>
            <div className="WeatherForcast-temperature">
              <span className="WeatherForcast-temperature-min">19°</span>
              <span className="WeatherForcast-temperature-max">20°</span>
            </div>
          </div>
        </div>
      </div>
    );
}