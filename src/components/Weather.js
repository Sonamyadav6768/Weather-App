import React from "react";
import "./Weather.css";
import swal from "sweetalert2";
export default function Weather(props) {
  let data = props.weather;
  let img = data.weather[0].icon;
  const getImage = (img) => {
    let url = "https://openweathermap.org/img/wn/" + img + "@2x.png";
    fetch(url)
      .then((Response) => {
        if (!Response.ok)
          throw new Error("Error in image" + Response.statusText);
        return Response.blob();
      })
      .then((image) => {
        const imageUrl = URL.createObjectURL(image);
        document.querySelector("img").src = imageUrl;
        // console.log(imageUrl);
      })
      .catch((error) => {
        new swal("oops!!", error.message, "error");
        // props.setweather(null);
      });
  };
  getImage(img);
  return (
    <div className="weather">
      <div className="img">
        <p>
          {data.name},{data.sys.country}
        </p>
        <img alt="weather" />
        <p>{data.weather[0].description}</p>
      </div>
      <div className="temp">
        {props.unit === "imperial" ? (
          <p> {data.main.temp}°F</p>
        ) : (
          <p>{Math.trunc(data.main.temp - 273)}°C</p>
        )}
      </div>
    </div>
  );
}
