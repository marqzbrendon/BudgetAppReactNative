  
/**
 * App.js
 *
 * Root component of the app, 
 * responsible for setting up routes.
 *
*/

// Libs
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Home from './src/Home';
import Budget from './src/Budget';

/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/
const Navigator = createStackNavigator({
    Home: { screen: Home },
    Budget: { screen: Budget },
});

/**
 * createAppContainer
 *
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
 *
*/
const App = createAppContainer(Navigator);

export default App;