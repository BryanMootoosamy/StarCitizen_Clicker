import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import ship from "../assets/images/ship.png";
import Styles from "../assets/style/style.js"
export default class Clicker extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            score: 0,
            height: this.props.screenHeight / 1.1,
            width: this.props.screenWidth / 1.1
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
            <View style={{zIndex: 1}}>
                <View style={{flex: 1}}>
                    <Text style={Styles.score}>{this.state.score} Vanduuls Killed</Text>
                </View>
                <View style={{flex: 0, height: this.state.height / 1.5, }}>
                    <TouchableOpacity  activeOpacity={1} onPress={this.clicker} onPressIn={this.zoomIn} onPressOut={this.zoomOut}>
                        <Image source={ship} style={{width: this.state.width, height: this.state.height, resizeMode: "contain"}} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
