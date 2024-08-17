import React from "react";
import { useState } from "react";
import swal from "sweetalert2";
import "./InputCity.css";
export default function InputCity(props) {
  const [data, setData] = useState("");
  const [temp, setTemp] = useState("F");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.length === 0) {
      new swal("Oops", "Please enter the city Name", "error");
      return;
    }
    props.setcity(data);
    setData("");
  };
  const handleOnchange = (event) => {
    setData(event.target.value);
  };
  const handleUnits = () => {
    // if (data.length === 0) return;
    if (temp === "F") {
      setTemp("C");
      props.unit("imperial");
    } else {
      setTemp("F");
      props.unit("metrics");
    }
  };
  return (
    <div className="city">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={data}
            onChange={handleOnchange}
            placeholder="Enter City..."
          />
        </form>
      </div>
      <div>
        <button onClick={handleUnits}>°{temp}</button>
      </div>
    </div>
  );
}
