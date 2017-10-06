import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens
import {
  AsyncStorage,
} from 'react-native';

AsyncStorage.getItem('notFirstLaunch').then((value) => launchApp(value));


var launchApp = function(value){
  if(value == "true"){
    // start the app
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'app.Home', // unique ID registered with Navigation.registerScreen
        title: '', // title of the screen as appears in the nav bar (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      },
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
      animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    });
  }
  else{
    AsyncStorage.setItem('notFirstLaunch', "true");
    // start the app
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'app.StartTour', // unique ID registered with Navigation.registerScreen
        title: '', // title of the screen as appears in the nav bar (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      },
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
      animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    });
  }

}
