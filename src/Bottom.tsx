import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Main from './pageMain';
import routine from './pageRoutine'

export type RootStackParamList = {
    Main: undefined;
    routine: undefined;
};

const Tab = createMaterialBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Settings" component={routine} />
    </Tab.Navigator>
  );
}