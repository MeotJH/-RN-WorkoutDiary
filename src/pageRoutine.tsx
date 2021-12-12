import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { theme } from './commonStyle';

const Routine = () => {
  return (
    <View style={Styles.container}>
        <Text>
            routineWorld
        </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
    container: theme.container,
  });

export default Routine;