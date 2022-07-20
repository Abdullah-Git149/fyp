import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import MyNav from './Navigation/MyNav';
import AuthProvider from './context/AuthContext';
import Toast from 'react-native-toast-message';

import {
  LogBox,
} from 'react-native';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider >
        <MyNav />
        <Toast /> 
      </AuthProvider >
    </NavigationContainer>
  );
};

export default App;
