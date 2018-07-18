import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import ship from "../assets/images/ship.png";
import Styles from "../assets/style/style.js";
import cannon from "../assets/images/cannon.png";
import cannon2 from "../assets/images/cannon2.png";
import rocket from "../assets/images/rocket.png";
export default class Clicker extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            score: 0,
            height: this.props.screenHeight,
            width: this.props.screenWidth,
            scale: this.props.screenWidth
        };
    }
    clicker = () => {
        this.setState({
            score: this.state.score + 1,
        });
    }
    zoomIn = () => {
        this.setState({
            scale: this.state.scale / 1.1
        })
    }
    zoomOut = () => {
        this.setState({
            scale: this.state.scale * 1.1
        })
    }
    bonus = () => {
        if (this.state.score >= 20) {
            return (
                <TouchableOpacity>
                    <Image style={{width: this.state.width / 3, height: this.state.height / 3, resizeMode: "center"}} source={cannon} />
                </TouchableOpacity>
            )
        }
        else if (this.state.score >= 10) {
            return (
                <View style={{borderWidth: 2, borderColor: "#FF0", flex: 1, flexDirection: "row"}}>
                    <TouchableOpacity onPress={() => {console.log("mdr")}}>
                        <Image style={{width: this.state.width / 3, resizeMode: "contain"}} source={cannon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {console.log("lol")}}>
                        <Image style={{width: this.state.width / 3, resizeMode: "contain"}} source={cannon2} />
                    </TouchableOpacity>
                </View>
            )
        }
    }
    render(){
        return(
            <View style={{height: this.state.height, borderWidth: 2, borderColor: "#FFF"}}>
                <View style={{borderWidth: 2, borderColor: "#FF0"}}>
                    <Text style={Styles.score}>{this.state.score} Vanduuls Killed</Text>
                </View>
                <View style={{borderWidth: 2, borderColor: "#0FF"}} >
                    <TouchableOpacity style={{borderWidth: 2, borderColor: "#F0F", height: this.state.height / 3.5, marginTop: this.state.height / 5}} activeOpacity={1} onPress={this.clicker} onPressIn={this.zoomIn} onPressOut={this.zoomOut}>
                        <Image source={ship} style={{width: this.state.scale / 1.1,flex: 1,resizeMode: "center", justifyContent:"space-around", alignContent: "center"}} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={Styles.score}>Bonus</Text>
                    {this.bonus()}
                </View>
            </View>
        );
    }
}
