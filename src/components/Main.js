import React, { useEffect } from "react";
import { useState } from "react";
import InputCity from "./InputCity";
import Weather from "./Weather";
import WeatherDescription from "./WeatherDescription";
import "./Main.css";
import swal from "sweetalert2";

export default function Main() {
  const [city, setCity] = useState("Bhopal");
  const [weatherDetail, setWeather] = useState(null);
  const [unit, setUnit] = useState("metrics");
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    getWeatherInfo(unit);
  }, [city]);
  const getWeatherInfo = (unit) => {
    console.log("asynunit" + unit);
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=7ad8a95bc4e5ff72516811b7bd567e87&units=" +
      unit;
    fetch(url)
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Error occured " + Response.statusText);
        }
        return Response.json();
      })
      .then((actualData) => {
        setWeather(actualData);
        console.log(unit + " " + actualData.main.temp);
        if (unit === "metrics") setTemp(Math.trunc(actualData.main.temp - 273));
        else setTemp(Math.trunc((actualData.main.temp - 32) * (5 / 9)));
        setUnit(unit);
      })
      .catch((error) => {
        new swal("oops!!", error.message, "error");
        setCity("Bhopal");
        // setWeather(null);
      });
  };
  const handleCity = (value) => {
    setCity(value);
  };
  const handleUnit = (value) => {
    getWeatherInfo(value);
  };
  console.log(weatherDetail);
  return (
    <div className={temp >= 30 ? "hot bg" : "cold bg"}>
      <div className="main">
        <InputCity setcity={handleCity} unit={handleUnit} />
        {weatherDetail !== null && (
          <Weather
            weather={weatherDetail}
            setweather={setWeather}
            unit={unit}
          />
        )}
        {weatherDetail !== null && (
          <WeatherDescription weather={weatherDetail} unit={unit} />
        )}
      </div>
    </div>
  );
}
