import SearchBox from "./search_box";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Panvel",
    feelsLike: 304.01,
    humidity: 83,
    temp: 300.49,
    tempMax: 300.49,
    tempMin: 300.49,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather Widget App</h2>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  );
}
