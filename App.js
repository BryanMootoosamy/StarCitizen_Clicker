/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {Image} from "react-native"
import {createBottomTabNavigator} from "react-navigation";
import Clicker from "./Components/clicker.js";
import Apropos from "./Components/apropos.js";
import gameIco from "./assets/images/gameIco.png";
import aboutIco from "./assets/images/about.png";

Clicker.navigationOptions = {
    tabBarIcon: () => {
        return (<Image source={gameIco} style={{height: 20, width: 20, resizeMode: "contain"}} />)
    }
}
Apropos.navigationOptions = {
    tabBarIcon: () => {
        return (<Image source={aboutIco} style={{height: 20, width: 20, resizeMode: "contain"}} />)
    }
}
const NavTab = createBottomTabNavigator(
    {
        Clicker,
        Apropos
    },
    {
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: "#003153",
            },
            activeBackgroundColor: "#004f86"
        },
        
    }
);

export default class App extends React.Component {
    render() {
        return (
            <NavTab />         
        );
    }
}
