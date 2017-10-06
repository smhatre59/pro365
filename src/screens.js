/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

/**
 * All screens need to be added here
 */
import AppIntro from './screens/AppIntro';
import StartTour from './screens/StartTour';
import Home from './screens/Home';

export function registerScreens() {
	Navigation.registerComponent('app.AppIntro', () => AppIntro);
	Navigation.registerComponent('app.StartTour', () => StartTour);
	Navigation.registerComponent('app.Home', () => Home);
}
