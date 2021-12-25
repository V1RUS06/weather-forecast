import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {FontAwesome5} from 'react-native-vector-icons'
import {Colors} from "../helpers/Colors";

export const ForecastCard = () => {

  return (

    <TouchableOpacity style={styles.container} activeOpacity={.7}>
      <View>
        <Text style={styles.textWeek}>Sat</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesome5 name='cloud-sun' color='white' size={36} />
      </View>
      <View>
        <Text style={styles.text}>30 C</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textWeek: {
    fontWeight: "bold",
    color: Colors.default,
    textTransform: 'uppercase'
  },
  text: {
    color: Colors.default,
  },
  icon: {
    paddingVertical: 5
  }

})
