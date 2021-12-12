import React from 'react';
import { Header } from 'react-native-elements';

const MainHeader = () => {
  return (
    <Header
    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
    centerComponent={{ text: 'WorkOutDiary', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
};

export default MainHeader;