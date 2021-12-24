import React from "react";
import {Text, View, StyleSheet, StatusBar, Image} from "react-native";
import {Colors} from "../helpers/Colors";
import {RainSvg} from "../../assets/icons/RainSvg";
import { FC } from "react";

interface Props {
    temp: number
    wind: number
    pressure: number
    humidity: number
    description: string
    country: string
    icon: string
}
export const Forecast:FC<Props> = ({temp,pressure, wind, humidity, description, country, icon}) => {

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.forecast}>
                <Image
                  source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}}
                  style={{width: 100, height: 100, }}

                />
                <Text style={styles.labelImage}>{description}</Text>
                <Text style={styles.degree}>{`${Math.floor(temp)} C`}</Text>
            </View>
            <View style={styles.subForecast}>
                <View>
                    {/*icon*/}
                    <Text style={styles.subForecastText}>{`${pressure} hpa`}</Text>
                </View>
                <View>
                    {/*icon*/}
                    <Text style={styles.subForecastText}>{`${humidity} %`}</Text>
                </View>
                <View>
                    {/*icon*/}
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
        textTransform: 'uppercase'
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
        marginTop: 15,
        width: '80%',
        flexDirection: "row",
        justifyContent: "space-between"

    },
    subForecastText: {
        color: Colors.default,
    }
})


