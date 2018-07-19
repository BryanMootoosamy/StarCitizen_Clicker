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
            scale: this.props.screenWidth,
            AttackLevel: 1,
            ACLevel: 1,
            RocketLevel: 1
        };
    }
    clicker = () => {
        this.setState({
            score: this.state.score + (this.state.AttackLevel * 1),
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
    cannon = () => {
        this.setState({
            score: this.state.score - (10 * this.state.AttackLevel)
        })
        this.state.AttackLevel ++;

    }
    cannon2 = () => {
        this.setState({
            score : this.state.score -(20 * this.state.ACLevel)
        })
        this.state.ACLevel ++;
        this.ACState = true;
    }
    rocket = () => {
        this.setState({
            score: this.state.score -(30 * this.state.RocketLevel)
        })
        this.state.RocketLevel ++
    }
    Bonus1 = () => {
        if (this.state.score >= 10 * this.state.AttackLevel) {
            return (
                <TouchableOpacity onPress={()=>{this.cannon()}}>
                    <Image style={{width: this.state.width / 3, height: this.state.height / 3, resizeMode: "center"}} source={cannon} />
                </TouchableOpacity>
            )
        }
    }
    Bonus2 = () => {
        if (this.state.score >= 20 * this.state.ACLevel) {
            return (
                <TouchableOpacity onPress={() => {this.cannon2();}}>
                    <Image style={{width: this.state.width / 3.5, resizeMode: "contain"}} source={cannon2} />
                </TouchableOpacity>
            )
        }
    }
    Bonus3 = () => {
        if (this.state.score >= 30 * this.state.RocketLevel) {
            return (
                <TouchableOpacity onPress={() => {this.rocket()}}>
                    <Image style={{width: this.state.width / 3.5, resizeMode: "contain"}} source={rocket} />
                </TouchableOpacity>
            )
        }
    }
    Autoclick = () => {
        if (this.ACState == true) {
            setInterval(function(){
                this.setState({
                    score: (this.state.score + ((1 * (this.state.ACLevel - 1)) * this.state.RocketLevel))
                })
            }.bind(this), 1000)
        }
        console.log("score " + this.state.score)
    }
    render(){
        let ACState = false;
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
                <View style={{borderWidth: 2, borderColor: "#7AF", width: this.state.width, height: this.state.height / 3.2}}>
                    <Text style={Styles.score}>Bonus</Text>
                    
                    <View style={{borderWidth: 2, borderColor: "#FF0", flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                        {this.Bonus1()}
                        {this.Bonus2()}
                        {this.Bonus3()}
                    </View>
                </View>
            </View>
        );
    }
}
