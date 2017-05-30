import React from 'react';
import Header from './Header';
import Main from './Main';
import { View, Text, StyleSheet } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.app}>
      <Header style={styles.header} />
      <Main style={styles.main} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  header: {
    height: 60,
    paddingTop: 15
  },
  main: {
    flex: 1
  }
});
