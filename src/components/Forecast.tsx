import React from "react";
import {Text, View, StyleSheet, StatusBar} from "react-native";
import {Colors} from "../helpers/Colors";
import {RainSvg} from "../../assets/icons/RainSvg";


export const Forecast = () => {

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.forecast}>
                <RainSvg/>
                <Text style={styles.labelImage}>Moderate raine</Text>
                <Text style={styles.degree}>30 C</Text>
            </View>
            <View style={styles.subForecast}>
                <View>
                    {/*icon*/}
                    <Text style={styles.subForecastText}>1009 hpa</Text>
                </View>
                <View>
                    {/*icon*/}
                    <Text style={styles.subForecastText}>74%</Text>
                </View>
                <View>
                    {/*icon*/}
                    <Text style={styles.subForecastText}>4 m/s</Text>
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


