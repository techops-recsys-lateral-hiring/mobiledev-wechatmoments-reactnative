/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore  from './reducers/store';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { increment } from './actions/HomeActions';
import { bindActionCreators } from 'redux'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Counter from './Counter';



const store = configureStore()

class App extends Component {

  render() {
  return(
<Provider store={store}>
    <Counter />
  </Provider>
)

  }
}
  
export default App
