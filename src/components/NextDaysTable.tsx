import React, {FC, useEffect, useState} from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";
import {Colors} from "../helpers/Colors";
import {ForecastCard} from "./ForecastCard";
import {getWeatherForFewDays} from "../../api/weather/weatherApi";
import {useLocation} from "../hooks/useLocation";
import {Loading} from "./Loading";

interface Props {
  weatherForWeek: []
}
export const NextDaysTable:FC<Props> = ({weatherForWeek}) => {

  const renderItem = ({item, index}) => {
    if (index > 4) {
      return null
    }
    return (
      <ForecastCard
        key={index}
        icon={item.weather[0].icon}
        temp={item.temp.day}
      />
    )
  }
  const renderKey = (item) => {
    return item.wind_gust
  }


  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.text}>Next 5 Days</Text>
      </View>
      <View style={styles.subContainer}>
        {!weatherForWeek
          ? <Loading/>
          : <FlatList
            // scrollEnabled={false}
            data={weatherForWeek}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={renderKey}
            contentContainerStyle={styles.renderContainer}
          />}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 60,
  },
  label: {
    alignItems: "center",
    paddingBottom: 5
  },
  text: {
    color: Colors.default
  },
  subContainer: {
    borderTopWidth: 1,
    borderColor: Colors.default,
    paddingVertical: 5,
  },
  renderContainer: {
    flexGrow: 1,
    justifyContent: "space-around",
  }


})
