import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator();

export const AppContainer = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={Screens.SplashScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Login"
        component={Screens.Login}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
