import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  console.log(props.data.icon);
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="cityAndDescription">
            <h4>{props.data.city}</h4>
            <h5>
              <FormattedDate date={props.data.date} />
            </h5>
            <h5 className="text-capitalize">{props.data.description}</h5>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="col-6">
          <div className="d-flex">
            <div className="d-flex align-items-lg-center">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                size={"64"}
              />
              <div className="d-flex align-items-lg-center">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-lg-center">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
