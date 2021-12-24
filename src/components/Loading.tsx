import React from "react";
import {Text, View} from "react-native";
import {Colors} from "../helpers/Colors";

export const Loading = () => (
  <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: Colors.blue}}>
    <Text style={{color: Colors.default}}>Загрузка данных...</Text>
  </View>
)
