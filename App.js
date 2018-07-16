/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar
} from 'react-native';
import background from "./assets/images/background.jpg";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    let {width} = Dimensions.get("window");
    this.state = {
      width: width,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image source={background} style={{width: this.state.width, flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
