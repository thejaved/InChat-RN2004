import * as React from 'react';
import AppStack from './AppStack';
import {NavigationContainer} from '@react-navigation/native';

export default function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
