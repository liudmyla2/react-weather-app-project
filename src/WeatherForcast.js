import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForcast(props) {
    function handleResponse(response) {

    }

    let apiKey = "be81f193e065bf5feb2d944c7336968b";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

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