import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import ship from "../assets/images/ship.png";
import Styles from "../assets/style/style.js"
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
            score: this.state.score + 1,
        });
    }
    zoomIn = () => {
        this.setState({
            height: this.state.height / 1.1,
            width: this.state.width / 1.1
        })
    }
    zoomOut = () => {
        this.setState({
            height: this.state.height * 1.1,
            width: this.state.width * 1.1
        })
    }
    render(){
        return(
            <View style={{height: this.state.height, borderWidth: 2, borderColor: "#FFF"}}>
                <View style={{borderWidth: 2, borderColor: "#FF0"}}>
                    <Text style={Styles.score}>{this.state.score} Vanduuls Killed</Text>
                </View>
                <View style={{borderWidth: 2, borderColor: "#0FF"}} >
                    <TouchableOpacity style={{borderWidth: 2, borderColor: "#F0F", height: this.state.height / 3.5, marginTop: this.state.height / 5}} activeOpacity={1} onPress={this.clicker} onPressIn={this.zoomIn} onPressOut={this.zoomOut}>
                        <Image source={ship} style={{width: this.state.width / 1.1,flex: 1,resizeMode: "center"}} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
