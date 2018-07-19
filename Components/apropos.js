import React from "react";
import {View, Text, ImageBackground, Dimensions} from "react-native";
import Styles from "../assets/style/style.js";
import aboutBG from "../assets/images/aboutBG.jpg";
export default class Apropos extends React.Component{
    constructor(props){
        super(props);
        let {width, height} = Dimensions.get("window");
        this.state={
            height: height,
            width: width
        }
    }
    render(){
        return(
            <View>
                <ImageBackground source={aboutBG} style={{height: this.state.height, width: this.state.width}} >
                    <Text style={Styles.score} >About</Text>
                    <View>
                        
                    </View>
                </ImageBackground>
            </View>
        );
    }
}