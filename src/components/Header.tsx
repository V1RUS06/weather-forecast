import React from "react";
import { FC } from "react";
import {View, Text, StyleSheet} from "react-native";
import { Colors } from "../helpers/Colors";

interface Props {
  country: string
}

export const Header:FC<Props> = ({country}) => (
  <View style={styles.container}>
      <Text style={styles.text}>{country}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: Colors.default,
    fontSize: 20,
    fontWeight: '500'
  }
})
