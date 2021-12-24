import React from "react";
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native'
import {Colors} from "../helpers/Colors";
import {Forecast} from "../components/Forecast";
import { FC } from "react";
import {Header} from "../components/Header";

interface Props {
  temp: number
  wind: number
  pressure: number
  humidity: number
  description: string
  country: string
  icon: string
}

export const Home:FC<Props> = ({temp, pressure, wind, humidity,description, country, icon}) => {

  return (
    <View style={styles.container}>
      <Header country={country}/>
      <Forecast temp={temp} wind={wind} pressure={pressure} humidity={humidity} description={description}  icon={icon}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    paddingTop: 20,
  }
});

