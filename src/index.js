import React from 'react';

import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Datadog} from '@services';
import {AppContainer, navigationRef} from '@navigators';

const App = () => {
  return (
    <NavigationContainer
      onReady={() => {
        Datadog.startTrackingViews(navigationRef.current);
      }}>
      <AppContainer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
