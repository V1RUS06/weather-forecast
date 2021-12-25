import React from "react";
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native'
import {Colors} from "../helpers/Colors";
import {Forecast} from "../components/Forecast";
import { FC } from "react";
import {Header} from "../components/Header";
import {NextDaysTable} from "../components/NextDaysTable";

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
      <View style={styles.forecastContainer}>
        <Forecast temp={temp} wind={wind} pressure={pressure} humidity={humidity} description={description}  icon={icon}/>
        <NextDaysTable />

      </View>
      <View style={styles.updateContainer}>
        <Text style={styles.lastUpdate}>Las update SAT 4 JUN 2021 16 : 45</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: Colors.blue,
    paddingTop: 30,
  },
  forecastContainer: {
    flex: 2,
    // paddingTop: 30,
    justifyContent: "flex-end",
    flexDirection: "column",
    // backgroundColor: 'yellow'

  },
  updateContainer: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: 'red',
    justifyContent: 'flex-end'

  },
  lastUpdate: {
    textTransform: "uppercase",
    color: Colors.default,
    marginBottom: 50,
  }
});

