import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/navigation';
import {GradienProvadier} from './src/context/GradientContext';
import {Tabs} from './src/navigation/Tabs';

const AppState = ({children}: any) => {
  return <GradienProvadier>{children}</GradienProvadier>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Tabs />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
