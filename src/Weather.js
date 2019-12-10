import React, { useState } from "react";
import CurrentTime from "./CurrentTime";
import CurrentTemp from "./CurrentTemp";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "a2df7199551cc39797a0929621d2b43a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
          <div className="time">
            <CurrentTime date={weatherData.date} />
          </div>
          <div className="temp">
            <CurrentTemp celsius={weatherData.temperature} />
          </div>
          <img src="illustration1.svg" width="350" alt="tree-ilustration" />
        </div>
        <div className="future-forecast">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Search for a city..."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-4">
                <input type="submit" value="Search" className="btn btn-light" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
