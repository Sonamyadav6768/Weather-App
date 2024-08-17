import React from "react";
import "./WeatherDescription.css";
import { FaWind } from "react-icons/fa";
import { MdWaterDrop, MdCompress } from "react-icons/md";
import { IoMdArrowDown, IoMdArrowUp, IoIosHappy } from "react-icons/io";
export default function WeatherDescription(props) {
  let data = props.weather;
  console.log(props.unit);
  return (
    <div className="container">
      <div class="box">
        <span>
          <IoMdArrowDown />
        </span>
        <span>Min</span>

        {props.unit === "imperial" ? (
          <p>{data.main.temp_min}°F</p>
        ) : (
          <p>{Math.trunc(data.main.temp_min - 273)}°C</p>
        )}
      </div>
      <div className="box">
        <span>
          <IoMdArrowUp />
        </span>
        <span>Max</span>

        {props.unit === "imperial" ? (
          <p>{data.main.temp_max}°F</p>
        ) : (
          <p>{Math.trunc(data.main.feels_like - 273)}°C</p>
        )}
      </div>
      <div className="box">
        <span>
          <IoIosHappy />
        </span>
        <span>Feels Like</span>
        {props.unit === "imperial" ? (
          <p>{data.main.feels_like}°F</p>
        ) : (
          <p>{Math.trunc(data.main.feels_like - 273)}°C</p>
        )}
      </div>
      <div className="box">
        <span>
          <MdCompress />
        </span>
        <span>Pressure</span>
        <p>{data.main.pressure}hPa</p>
      </div>
      <div className="box">
        <span>
          <MdWaterDrop />
        </span>
        <span>Humidity</span>
        <p>{data.main.humidity}%</p>
      </div>
      <div className="box">
        <span>
          <FaWind />
        </span>
        <span>Wind Speed</span>
        <p>{data.wind.speed}m/s</p>
      </div>
    </div>
  );
}
