/* eslint-disable react/prop-types */
import "./infos5days.css";

function Infos5days({ weather5days }) {
  console.log(weather5days);

  let dailyForecast = {};

  for (let forescast of weather5days.list) {
    const date = new Date(forescast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forescast;
    }
  }

  const next5days = Object.values(dailyForecast).slice(1, 6);
  console.log(next5days);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-br", {
      weekday: "long",
      day: "2-digit",
    });
    return newDate;
  }
  return (
    <div className="weather-container">
      <h3>Previsão proximos 5 dias</h3>
      <div className="weather-list">
        {next5days.map((forescast) => (
          <div key={forescast.dt} className="weather-item">
            <p className="forecast-day">{convertDate(forescast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forescast.weather[0].icon}.png`}
            />
            <p className="forecast-description">
              {forescast.weather[0].description}
            </p>
            <p>
              {Math.round(forescast.main.temp_min)}°C min /
              {Math.round(forescast.main.temp_max)}°C max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Infos5days;
