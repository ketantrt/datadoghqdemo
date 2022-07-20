/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

export const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 2000);
  });

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>SplashScreen</Text>
    </View>
  );
};
