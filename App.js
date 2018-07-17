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
            <View>
                <StatusBar hidden={true} />
                <View style={{width: this.state.width, height: this.state.height}}>
                    <ImageBackground source={background} style={{width: this.state.width, height: this.state.height, zIndex : 0}}>
                        <Clicker screenWidth={this.state.width} screenHeight={this.state.height} />
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
