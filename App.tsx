import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import MainPage from './src/pageMain';
import MainHeader from './src/MainHeader';
import { MyTabs } from './src/Bottom'
export default function App() {
  return (
    
    <NavigationContainer>
      <MainHeader/>
      <MyTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
