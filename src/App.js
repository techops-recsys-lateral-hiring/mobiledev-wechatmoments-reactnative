/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainNavigation from './navigation/MainNavigation';

import configureStore  from './reducers/store';




const store = configureStore()




class App extends Component {

  render() {
  return(
<Provider store={store}>
<MainNavigation />
  </Provider>
)

  }
}
  
export default App
