import React from "react";
import {Text, View, Image, TouchableOpacity, Dimensions, ImageBackground, StatusBar, AsyncStorage} from "react-native";
import ship from "../assets/images/ship.png";
import Styles from "../assets/style/style.js";
import background from "../assets/images/background.jpg";
import cannon from "../assets/images/cannon.png";
import cannon2 from "../assets/images/cannon2.png";
import rocket from "../assets/images/rocket.png";
export default class Clicker extends React.Component{
    constructor(props) {
        super(props);
        let {width, height} = Dimensions.get("window");
        this.state={
            score: 0,
            height: height,
            width: width,
            scale: width,
            AttackLevel: 1,
            ACLevel: 0,
            RocketLevel: 1,
            ACState: false,
            interval: 0
        };
    }
    async dataToSave (name, data) {
        try{
            await AsyncStorage.setItem(name, String(data))
        } catch (error) {
            console.log("saveVar" + error)
        }
    }
    clicker = () => {
        this.setState({
            score: this.state.score + (this.state.AttackLevel * this.state.RocketLevel),
        });
        this.dataToSave('score', this.state.score);
    }
    async componentDidMount(){
        let cannonToLoad = await this.load('AttackLevel');
        let cannon2ToLoad = await this.load('ACLevel');
        let intervalToLoad = await this.load('interval');
        let scoreToLoad = await this.load('score');
        cannonToLoad = Number(cannonToLoad);
        cannon2ToLoad = Number(cannon2ToLoad);
        scoreToLoad = Number(scoreToLoad);
        this.state.ACState = true;
        this.state.interval = 0;
        this.Autoclick();
        this.state.ACState = false;
        intervalToLoad = Number(intervalToLoad);
        if (cannonToLoad > 1) {
            this.setState({
                AttackLevel: cannonToLoad
            })
        }
        if (this.state.score == 0) {
            this.setState({
                score: scoreToLoad,
                ACLevel: cannon2ToLoad,
                interval: intervalToLoad
            });
        }else {
            this.setState({
                score: scoreToLoad + this.state.AttackLevel,
                ACLevel: cannon2ToLoad,
                interval: intervalToLoad
            });
        }
    }
    async load(arg){
        try{
            var cannonLoad = await AsyncStorage.getItem(arg);
        } catch (error){
            console.log("loadVar" + error);
        }
        return cannonLoad;
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
            score: this.state.score - (100 * this.state.AttackLevel),
        });
        this.state.AttackLevel++;
        this.dataToSave('AttackLevel', this.state.AttackLevel);
    }
    cannon2 = () => {
        this.setState({
            score : this.state.score -(200 * (this.state.ACLevel + 1))
        })
        this.state.ACLevel ++;
        this.state.ACState = true;
        this.dataToSave('ACLevel', this.state.ACLevel);
    }
    rocket = () => {
        this.setState({
            score: this.state.score -(500 * this.state.RocketLevel)
        })
        this.setState({
            RocketLevel: 2
        })
        setTimeout(() => {
            this.setState({
                RocketLevel: 1
            })
        }, 30000)
    }
    Bonus1 = () => {
        if (this.state.score >= 100 * this.state.AttackLevel) {
            return (
                <TouchableOpacity onPress={()=>{this.cannon()}}>
                    <Image style={{width: this.state.width / 3, height: this.state.height / 3, resizeMode: "center"}} source={cannon} />
                </TouchableOpacity>
            )
        }
    }
    Bonus2 = () => {
        if (this.state.score >= 200 * (this.state.ACLevel + 1)) {
            return (
                <TouchableOpacity onPress={() => {this.cannon2();}}>
                    <Image style={{width: this.state.width / 3.5, resizeMode: "contain"}} source={cannon2} />
                </TouchableOpacity>
            )
        }
    }
    Bonus3 = () => {
        if (this.state.score >= 500 * this.state.RocketLevel) {
            return (
                <TouchableOpacity onPress={() => {this.rocket()}}>
                    <Image style={{width: this.state.width / 3.5, resizeMode: "contain"}} source={rocket} />
                </TouchableOpacity>
            )
        }
    }
    interval = undefined;
    Autoclick = () => {
        if (this.state.ACState == true) {
            if (this.state.interval == 0) {
                setInterval(function(){
                    this.setState({
                        score: (this.state.score + ((1 * (this.state.ACLevel)) * this.state.RocketLevel))
                    })
                }.bind(this), 1000);
                this.state.interval = 1;
                this.dataToSave('interval', this.state.inteval);
            }
            else {
                this.setState({
                    ACLevel: this.state.ACLevel + 1
                });
            }
            
        }
        this.state.ACState = false;
    }
    render(){
        this.Autoclick();
        return(
             <View>
                <StatusBar hidden={true} />
                <View style={{width: this.state.width, height: this.state.height}}>
                    <ImageBackground source={background} style={{width: this.state.width, height: this.state.height, zIndex : 0}}>
                        <View style={{height: this.state.height,}}>
                            <View>
                                <Text style={Styles.score}>{this.state.score} Vanduuls Killed</Text>
                            </View>
                            <View>
                                <Text style={Styles.score}>Bonus Counter</Text>
                                <Text style={{fontSize: 20, color: "#FFF", marginLeft: this.state.width / 4.1}}>Behring: x{this.state.AttackLevel - 1}  Bulldog: x{this.state.ACLevel}</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{height: this.state.height / 3.5, marginTop: this.state.height / 15}} activeOpacity={1} onPress={this.clicker} onPressIn={this.zoomIn} onPressOut={this.zoomOut}>
                                    <Image source={ship} style={{width: this.state.scale / 1.1,flex: 1,resizeMode: "center", justifyContent:"space-around", alignContent: "center"}} />
                                </TouchableOpacity>
                            </View>
                            <View style={{width: this.state.width, height: this.state.height / 3.2}}>
                                <Text style={Styles.score}>Bonus</Text>
                                
                                <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                                    {this.Bonus1()}
                                    {this.Bonus2()}
                                    {this.Bonus3()}
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
