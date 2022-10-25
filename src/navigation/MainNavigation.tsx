import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TweetList} from '../features/TweetList/ui/TweetList';

const Stack = createNativeStackNavigator();
const MainNavigation = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TweetList}
          options={{title: 'Moments'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
