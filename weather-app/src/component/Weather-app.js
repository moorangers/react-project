import React, { useEffect, useState } from "react";

function WeatherApp() {
  const name = "tokyo";
  const apiKey = "76fc8b73a5da009d562261039a797e5f";
  const [city, setCity] = useState({});

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setCity(data);
      });
  }, []);

  const convertTemp = (k) => {
    return (k - 273).toFixed();
  };

  return (
    <div className="weather">
      <section>
        <div className="location">
          <h1 className="city">{city.name}</h1>
          <p className="state">{city.sys.country} </p>
        </div>
        <div className="card">
          <div className="weather">
            <h1>{convertTemp(city.main.temp)}&deg;C</h1>
            <small>max: {convertTemp(city.main.temp_max)}&deg;C</small>
            <small>min: {convertTemp(city.main.temp_min)}&deg;C</small>
          </div>
          <div className="info">
            {/* <div className="status">{city.weather[0].main} </div> */}
            <div className="humidity">{city.main.humidity} </div>
            <div className="windSpeed">{city.wind.speed}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeatherApp;
