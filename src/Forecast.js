import React from "react";
import "./forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">{/*props.data.weatherData.nextday*/}</div>
        <div className="col">{/*props.data.weatherData.secondday*/}</div>
        <div className="col">{/*props.data.weatherData.thirdday*/}</div>
        <div className="col">{/*props.data.weatherData.fourthday*/}</div>
      </div>
      <div className="row">
        <div className="col">
          <img
            id="next-day-icon"
            src={
              "http://openweathermap.org/img/wn/01d@2x.png" /*props.data.weatherData.nextdayicon*/
            }
            alt="#"
          />
        </div>
        <div className="col">
          <img
            id="second-day-icon"
            src={
              "http://openweathermap.org/img/wn/01d@2x.png" /*props.data.weatherData.seconddayicon*/
            }
            alt="#"
          />
        </div>
        <div className="col">
          <img
            id="third-day-icon"
            src={
              "http://openweathermap.org/img/wn/01d@2x.png" /*props.data.weatherData.thirddayicon*/
            }
            alt="#"
          />
        </div>
        <div className="col">
          <img
            id="forth-day-icon"
            src={
              "http://openweathermap.org/img/wn/01d@2x.png" /*props.data.weatherData.fourthdayicon*/
            }
            alt="#"
          />
        </div>
      </div>
      <div className="row" id="forecast-temp">
        <div className="col">{/*props.data.weatherData.nextdaytemp*/}</div>
        <div className="col">{/*props.data.weatherData.seconddaytemp*/}</div>
        <div className="col">{/*props.data.weatherData.thirddaytemp*/}</div>
        <div className="col">{/*props.data.weatherData.fourthdaytemp*/}</div>
      </div>
    </div>
  );
}
