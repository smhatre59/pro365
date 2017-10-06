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

export default class StartTour extends Component {
  constructor(props) {
		super(props);
	}
  onPressStartTour(event){
        this.props.navigator.resetTo({
          screen: 'app.AppIntro', // unique ID registered with Navigation.registerScreen
          title: "Tour", // navigation bar title of the pushed screen (optional)
          passProps: {}, // simple serializable object that will pass as props to the pushed screen (optional)
          animated: true, // does the resetTo have transition animation or does it happen immediately (optional)
          animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
        });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Icon key={"iconKey"} name="ios-globe" size={90} color={"red"}/>
          <Text style={styles.appTitle}>
            Project 365
          </Text>
        </View>
        <View style={styles.lowerContainer}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={(event) => this.onPressStartTour(event)}
                title="   Start Tour  "
                color="red"
                accessibilityLabel="Start Tour"
              />
            </View>
        </View>
      </View>
    );
  }
}

StartTour.navigatorStyle = {
	navBarTextColor: 'white', // change the text color of the title (remembered across pushes)
	navBarHidden: true,
  tabBarHidden: true,
};

StartTour.PropTypes = {
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
