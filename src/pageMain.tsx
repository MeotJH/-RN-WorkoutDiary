import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { theme } from './commonStyle';

const MainPage = () => {
  return (
    <View style={Styles.container}>
        <Text>
            hello world
        </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
    container: theme.container,
  });

export default MainPage;