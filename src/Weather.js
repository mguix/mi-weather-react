import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      hour: "15",
      minutes: "03",
      day: "Monday",
      date: new Date(response.data.dt * 1000),
      month: "June",
      year: "2019",
      imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="current-forecast">
          <div className="icons">
            <img
              id="weatherIcon"
              src={weatherData.imgUrl}
              alt={weatherData.description}
            />
          </div>
          <h2>{weatherData.city}</h2>
          <p>
            {weatherData.hour}:{weatherData.minutes} {weatherData.day}{" "}
            {weatherData.date}, {weatherData.month} {weatherData.year}
          </p>
          <h1 className="temperature-container">
            {Math.round(weatherData.temperature)}
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
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Search for a city..."
                  className="form-control"
                />
              </div>
              <div className="col-4">
                <input type="submit" value="Search" className="btn btn-light" />
              </div>
            </div>
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
              <img
                id="second-day-icon"
                src={weatherData.seconddayicon}
                alt="#"
              />
            </div>
            <div className="col">
              <img id="third-day-icon" src={weatherData.thirddayicon} alt="#" />
            </div>
            <div className="col">
              <img
                id="forth-day-icon"
                src={weatherData.fourthdayicon}
                alt="#"
              />
            </div>
          </div>
          <div className="row" id="forecast-temp">
            <div className="col">{weatherData.nextdaytemp}</div>
            <div className="col">{weatherData.seconddaytemp}</div>
            <div className="col">{weatherData.thirddaytemp}</div>
            <div className="col">{weatherData.fourthdaytemp}</div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a2df7199551cc39797a0929621d2b43a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
