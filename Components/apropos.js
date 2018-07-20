import React from "react";
import {View, Text, ImageBackground, Dimensions, Image, Linking, Button} from "react-native";
import Styles from "../assets/style/style.js";
import aboutBG from "../assets/images/aboutBG.jpg";
import profilePic from "../assets/images/face.jpg";
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
        const uri = "https://paypal.me/BryanMootoosamy"
        return(
            <View>
                <ImageBackground source={aboutBG} style={{height: this.state.height, width: this.state.width}} >
                    <Text style={Styles.score} >About</Text>
                    <View style={{flex: 1, alignItems: "center"}}>
                        <Image style={{width: 90, height: 90, borderRadius: 100, marginTop: 40}} source={profilePic} />
                        <Text style={{fontSize: 25, color: "#34B6FF", textAlign:"center", backgroundColor: "rgba(255,255,255,0.8)", marginTop: 20, marginBottom: 20, padding: 10}}>Junior developper, I backed Star Citizen in 2014 after seeing numerous vids on youtube about the game.
                            It quickly became my dream's game and so, while we wait fot it to be released, I hope you'll wait with this little game to occupy you.
                            I'll release updates to provide content and features to the game, and if you want to contribute, you can give me a little something on my paypal account:
                        </Text>
                        <Button style={{height: 30}} title="Paypal" onPress={
                            () => {
                                Linking.openURL(uri).catch(err => console.error('an error occured', err));
                            }
                        } />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}