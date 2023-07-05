import axios from "axios";
import { useState, useEffect } from "react";

const WeatherCard = () => {
  const [data, setData] = useState({});
  const [unit, setUnit] = useState("metric");
  const icons = {
    "01d": "/icons/01d.svg",
    "02d": "/icons/02d.svg",
    "03d": "/icons/03d.svg",
    "04d": "/icons/04d.svg",
    "09d": "/icons/09d.svg",
    "10d": "/icons/10d.svg",
    "11d": "/icons/11d.svg",
    "13d": "/icons/13d.svg",
    "50d": "/icons/50d.svg",
    "01n": "/icons/01n.svg",
    "02n": "/icons/02n.svg",
    "03n": "/icons/03n.svg",
    "04n": "/icons/04n.svg",
    "09n": "/icons/09n.svg",
    "10n": "/icons/10n.svg",
    "11n": "/icons/11n.svg",
    "13n": "/icons/13n.svg",
    "50n": "/icons/50n.svg",
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=5180f77f142492d783f21f2d379b3fbc&lang=sp&units=metric`
        )
        .then((resp) => setData(resp.data))
        .catch((error) => console.error(error));
    });
  }, [unit]);

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  return (
    <section className="main_container">
      <div className="title">
        <h1>Weather app</h1>
      </div>
     
      <div className="group">
        <svg className="bar" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Buscar" type="search" className="input" />
      </div>

      <div className="weather_card">
        <h1 className="temperature">
          {unit === "metric"
            ? Math.round(data.main?.temp)
            : (Math.round((data.main?.temp * 9) / 5 + 32))}
          {unit === "metric" ? " °C" : " °F"}
        </h1>
        <div className="Climate_Image">
          <img src={icons[data.weather?.[0].icon]} alt="iconos" />
        </div>
        <div className="environmental_container">
          <p>VIENTO: {data.wind?.speed} m/s</p>
          <p>NUBES: {data.clouds?.all} %</p>
          <p>PRESIÓN: {data.main?.pressure} hPa </p>
        </div>
        <div className="bottom_row">
          <div className="city_container">
            <p>
              {data.name}, {data.sys?.country}
            </p>
          </div>
          <div className="sky_status">
            <p>{data.weather?.[0].description}</p>
          </div>
        </div>
      </div>

      <button className="units_button" onClick={toggleUnit}>
        <i className="fa-solid fa-temperature-low"></i>
      </button>
    </section>
  );
};

export default WeatherCard;
