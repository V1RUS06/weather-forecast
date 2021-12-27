import React, {FC} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {FontAwesome5, MaterialCommunityIcons} from 'react-native-vector-icons'
import {Colors} from "../helpers/Colors";


interface Props {
  temp: number
  icon: string
  key?: number
  day: any
}

export const ForecastCard:FC<Props> = ({temp, icon, day }) => {

  const  getWeekDay = (date: any) => {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getUTCDay()];
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={.6}>
      <View>
        <Text style={styles.textWeek}>{getWeekDay(new Date(+day * 1000))}</Text>
      </View>
      <View style={styles.icon}>
        <Image
          source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}}
          style={{width: 60, height: 60, }}
        />
      </View>
      <View>
        <Text style={styles.text}>{Math.floor(temp)}<MaterialCommunityIcons name='temperature-celsius' size={18}/></Text>
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
    fontSize: 16
  },
  icon: {
    paddingVertical: 5
  }

})
