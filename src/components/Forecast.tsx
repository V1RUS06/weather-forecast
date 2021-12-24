import React from "react";
import {Text, View, StyleSheet, StatusBar, Image} from "react-native";
import {Colors} from "../helpers/Colors";
import {RainSvg} from "../../assets/icons/RainSvg";
import { FC } from "react";
import { MaterialCommunityIcons, FontAwesome5, Fontisto } from 'react-native-vector-icons'

interface Props {
    temp: number
    wind: number
    pressure: number
    humidity: number
    description: string
    icon: string
}
export const Forecast:FC<Props> = ({temp,pressure, wind, humidity, description, icon}) => {

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.forecast}>
                <Image
                  source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}}
                  style={{width: 100, height: 100, }}

                />
                <Text style={styles.labelImage}>{description}</Text>
                <Text style={styles.degree}>{`${Math.floor(temp)}`}<MaterialCommunityIcons name='temperature-celsius' size={34}/></Text>
            </View>
            <View style={styles.subForecast}>
                <View style={styles.subForecastItem}>
                    <FontAwesome5 name='temperature-high' color='white' size={18}/>
                    <Text style={styles.subForecastText}>{`${pressure} hpa`}</Text>
                </View>
                <View style={styles.subForecastItem}>
                    <Fontisto name='blood-drop' color='white' size={18}/>
                    <Text style={styles.subForecastText}>{`${humidity} %`}</Text>
                </View>
                <View style={styles.subForecastItem}>
                    <FontAwesome5 name='wind' color='white' size={18}/>
                    <Text style={styles.subForecastText}>{`${wind} m/s`}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    labelImage: {
        color: Colors.default,
        fontSize: 20,
        textTransform: 'uppercase',
        marginTop: -15
    },
    degree: {
        color: Colors.default,
        fontSize: 34,
        fontWeight: 'bold'
    },
    forecast: {
        alignItems: 'center'

    },
    subForecast: {
        marginTop: 20,
        width: '80%',
        flexDirection: "row",
        justifyContent: "space-between",
        opacity: .8

    },
    subForecastText: {
        color: Colors.default,
        marginLeft: 5,
        fontWeight: "bold",

    },
    subForecastItem: {
        flexDirection: "row",
        alignItems: "center"
    }
})


