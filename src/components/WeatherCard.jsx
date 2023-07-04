import axios from "axios";
import { useState, useEffect } from "react";

const WeatherCard = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios
      .get("")
      .then((resp) => {
        console.log(resp.data);
        setInfo(resp.data);
      })
      .catch((error) => console.error(error));
  },[]);

  return (
    <div className="main_container">
      <div className="title">
        <h1>Weather App</h1>
      </div>

      <div className="search_bar">
        <input type="text" placeholder="Buscar..." />
      </div>

      <div className="weather_card">
        <h1 className="temperature">19°</h1>
        <div className="environmental_container">
          <p>VIENTO</p>
          <p>NUBES</p>
          <p>PRESIÓN</p>
        </div>
        <div className="bottom_row">
          <div className="city_container">
            <p>Palmira, Colombia</p>
          </div>
          <div className="sky_status">
            <p>Parcialmente nublado</p>
          </div>
        </div>
      </div>

      <button className="units_button">Unidades</button>
    </div>
  );
};

export default WeatherCard;
