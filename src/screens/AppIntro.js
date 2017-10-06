/**
 * AppIntro&TourScreen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Intro from 'react-native-app-intro';
import PropTypes from 'prop-types';
import { iconsMap, iconsLoaded } from '../components/icons/iconSource';
export default class AppIntro extends Component {
  onSkipBtnHandle = (index) => {
    this.props.navigator.resetTo({
      screen: 'app.Home', // unique ID registered with Navigation.registerScreen
      title: "Home", // navigation bar title of the pushed screen (optional)
      passProps: {}, // simple serializable object that will pass as props to the pushed screen (optional)
      animated: true, // does the resetTo have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
    });
  }
  doneBtnHandle = () => {
    this.props.navigator.resetTo({
      screen: 'app.Home', // unique ID registered with Navigation.registerScreen
      title: "Home", // navigation bar title of the pushed screen (optional)
      passProps: {}, // simple serializable object that will pass as props to the pushed screen (optional)
      animated: true, // does the resetTo have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
    });
  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    const pageArray = [{
      title: 'Introduction',
      description: 'Discover new facts about getting healthy,wealthy and wise everyday',
      img: iconsMap['ios-flower'],
      imgStyle: {
        height: 150,
        width: 150,
        resizeMode: "contain"
      },
      backgroundColor: '#03A9F4',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Healthy',
      description: 'This section covers all articles related to workouts, medicines and general healthcare',
      img: iconsMap['ios-pulse'],
      imgStyle: {
        height: 200,
        width: 200,
        resizeMode: "contain"
      },
      backgroundColor: '#F44336',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Wealthy',
      description: 'This section covers all articles related to managing finances, generating wealth and long term investment plans',
      img: iconsMap['ios-cash'],
      imgStyle: {
        height: 200,
        width: 200,
        resizeMode: "contain"
      },
      backgroundColor: '#009688',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Wise',
      description: 'This section covers all articles related to interesting facts, stories of rise of famous personalities and much more',
      img: iconsMap['ios-bulb'],
      imgStyle: {
        height: 200,
        width: 200,
        resizeMode: "contain"
      },
      backgroundColor: '#FBC02D',
      fontColor: '#fff',
      level: 10,
    }];
    return (
      <Intro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}

AppIntro.navigatorStyle = {
	navBarHidden: true,
  tabBarHidden: true,
};

AppIntro.PropTypes = {
	navigator: PropTypes.object,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
