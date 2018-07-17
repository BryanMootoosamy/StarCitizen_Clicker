/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {View, StyleSheet, ImageBackground, Dimensions, StatusBar} from "react-native";
import background from "./assets/images/background.jpg";
import Clicker from "./Components/clicker.js";



export default class App extends React.Component {
    constructor(props) {
        super(props);
        let {width, height} = Dimensions.get("window");
        this.state = {
            width: width,
            height: height
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={{width: this.state.width}}>
                    <ImageBackground source={background} style={{width: this.state.width, height: this.state.height}}>
                        <Clicker screenWidth={this.state.width} screenHeight={this.state.height} />
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});
