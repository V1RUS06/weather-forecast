import React, {useEffect, useState} from "react";
import {Home} from "./src/screens/Home";
import {useLocation} from "./src/hooks/useLocation";
import {Text} from "react-native";

export default function App() {
  const {longitude, latitude, loading} = useLocation()
  const [weather, setWeather] = useState()

  // useEffect(() => {
  //   (async () => {
  //     if (longitude && latitude) {
  //       const weather: IWeather= await getWeatherApi(longitude, latitude)
  //
  //       setWeather(weather)
  //     }
  //   })()
  // }, []);

  // if (loading || !weather) {
  //   return <Text style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>Загрузка данных...</Text>
  // }
  return (

      <Home />

  );
}

