import { useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import Infos from "./components/WeatherInformations/Infos";
import Infos5days from "./components/WeatherInformations/Infos5days/Infos5days";

function App() {
  const [weather, setWeather] = useState();
  const [weather5days, setWeather5days] = useState();
  const inputRef = useRef();

  async function SearchCity() {
    const city = inputRef.current.value;
    const key = "cebcd482eda57fa9a6714c1c2ba91885";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5days = await axios.get(url5days);

    setWeather5days(apiInfo5days.data);
    setWeather(apiInfo.data);
  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={SearchCity}>Buscar</button>

      {/*Se o usuario colocar alguma cidade, dai ele vai renderizar o componente */}
      {weather && <Infos weather={weather} />}
      {weather5days && <Infos5days weather5days={weather5days} />}
    </div>
  );
}

export default App;
