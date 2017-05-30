import Expo from 'expo';
import React from 'react';
import App from './app';
import { View, Text, StyleSheet } from 'react-native';

class Main extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <App />
      </View>
    );
  }
}

Expo.registerRootComponent(Main);
