import React from "react";
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native'
import {Colors} from "../helpers/Colors";
import {Forecast} from "../components/Forecast";

export const Home = () => {

    return (
        <View style={styles.container}>
            <Forecast />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        paddingTop: 20,
    }
});

