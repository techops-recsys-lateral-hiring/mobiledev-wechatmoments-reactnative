import Counter from '../features/Counter/ui/Counter';
import React, {ReactElement} from 'react';
import {TweetList} from '../features/TweetList/ui/TweetList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
