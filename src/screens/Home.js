/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
		super(props);
	}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Icon key={"iconKey"} name="ios-globe" size={90} color={"red"}/>
          <Text style={styles.appTitle}>
            Home
          </Text>
        </View>
      </View>
    );
  }
}

Home.navigatorStyle = {
	navBarTextColor: 'white', // change the text color of the title (remembered across pushes)
	navBarHidden: true,
  tabBarHidden: true,
};

Home.PropTypes = {
	navigator: PropTypes.object,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  upperContainer:{
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer:{
    flex: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:'#ffffff'
  },
  buttonContainer:{
    width: 200,
    height: 150
  }
});
