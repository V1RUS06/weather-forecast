import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Colors} from "../helpers/Colors";
import {ForecastCard} from "./ForecastCard";

export const NextDaysTable = () => (

  <View style={styles.container}>
    <View style={styles.label}>
      <Text style={styles.text}>Next 5 Days</Text>
    </View>
    <View style={styles.subContainer}>
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </View>
  </View>
)


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
    flexDirection: "row",
    justifyContent: "space-around"
    // paddingHorizontal: 20
  },

})
