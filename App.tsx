import React, {useEffect, useState} from "react";
import {Home} from "./src/screens/Home";
import {useLocation} from "./src/hooks/useLocation";
import {getWeather} from "./api/weather/weatherApi";
import {Loading} from "./src/components/Loading";

export default function App() {
  const {longitude, latitude, loading} = useLocation()
  const [weather, setWeather] = useState()

  useEffect(() => {
    (async () => {
      if (longitude && latitude) {
        const weather = await getWeather(longitude, latitude)

        setWeather(weather)
      }
    })()
  }, [longitude, latitude]);

  // console.log(weather.weather[0].icon,'><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

  if (loading || !weather) {
    return <Loading />
  }
  return (
      <Home
        temp={weather.main.temp}
        pressure={weather.main.pressure}
        wind={weather.wind.speed}
        humidity={weather.main.humidity}
        description={weather.weather[0].description}
        country={weather.name}
        icon={weather.weather[0].icon}
      />
  );
}

