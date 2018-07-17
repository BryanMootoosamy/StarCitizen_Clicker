import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import ship from "../assets/images/ship.png";

export default class Clicker extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            score: 0,
            height: this.props.screenHeight,
            width: this.props.screenWidth
        };
    }
    clicker = () => {
        this.setState({
            score: this.state.score + 1
        });
    }
    render(){
        return(
            <View>
                <TouchableOpacity activeOpacity={1} onPress={this.clicker}>
                    <Image source={ship} style={{width: this.state.width / 1.1, height: this.state.height / 1.1, resizeMode: "contain"}} />
                </TouchableOpacity>
                <Text style={{color: "#fff"}}>{this.state.score}</Text>
            </View>
        );
    }
}
