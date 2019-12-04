import React from "react";
import Footer from "./Footer";
import "./App.css";

function App() {
  let weatherData = {
    city: "Barcelona",
    hour: "15",
    minutes: "03",
    day: "Monday",
    date: "26",
    month: "June",
    year: "2019",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png"
  };

  return (
    <div className="App">
      <div className="current-forecast">
        <div className="icons">
          <img id="weatherIcon" src={weatherData.imgUrl} alt="#" />
        </div>
        <h2>{weatherData.city}</h2>
        <p>
          {weatherData.hour}:{weatherData.minutes} {weatherData.day}{" "}
          {weatherData.date}, {weatherData.month} {weatherData.year}
        </p>
        <h1 className="temperature-container">
          12
          <span className="weather-unit">
            <a href="/" className="active">
              Cº
            </a>{" "}
            | <a href="/">ºF</a>
          </span>
        </h1>
        <img src="illustration1.svg" width="350" alt="tree-ilustration" />
      </div>
      <div className="future-forecast">
        <form>
          <input
            type="text"
            placeholder="Search a city"
            className="form-control"
          />
        </form>
        <div className="row">
          <div className="col">{weatherData.nextday}</div>
          <div className="col">{weatherData.secondday}</div>
          <div className="col">{weatherData.thirdday}</div>
          <div className="col">{weatherData.fourthday}</div>
        </div>
        <div className="row">
          <div className="col">
            <img id="next-day-icon" src={weatherData.nextdayicon} alt="#" />
          </div>
          <div className="col">
            <img id="second-day-icon" src={weatherData.seconddayicon} alt="#" />
          </div>
          <div className="col">
            <img id="third-day-icon" src={weatherData.thirddayicon} alt="#" />
          </div>
          <div className="col">
            <img id="forth-day-icon" src={weatherData.fourthdayicon} alt="#" />
          </div>
        </div>
        <div className="row" id="forecast-temp">
          <div className="col">{weatherData.nextdaytemp}</div>
          <div className="col">{weatherData.seconddaytemp}</div>
          <div className="col">{weatherData.thirddaytemp}</div>
          <div className="col">{weatherData.fourthdaytemp}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
