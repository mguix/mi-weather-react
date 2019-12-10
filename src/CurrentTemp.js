import React, { useState } from "react";
import "./currenttemp.css";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarn(event) {
    event.preventDefault();
    setUnit("Farn");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farn() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="celsius-container">
        <h1>
          {Math.round(props.celsius)}
          <span className="weather-unit">
            Cº |{" "}
            <a href="/" onClick={showFarn}>
              ºF
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    return (
      <div className="farn-container">
        <h1>
          {Math.round(farn())}
          <span className="weather-unit">
            <a href="/" onClick={showCelsius}>
              Cº{" "}
            </a>
            | ºF
          </span>
        </h1>
      </div>
    );
  }
}
