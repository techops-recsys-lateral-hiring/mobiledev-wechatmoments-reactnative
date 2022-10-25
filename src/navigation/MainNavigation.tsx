import React, { ReactElement } from "react";
import Home from '../features/Home/ui/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,Image
} from 'react-native'


import {TweetList} from '../features/TweetList/ui/TweetList';

const Stack = createNativeStackNavigator();
const MainNavigation = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: null, headerTransparent: true,}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
