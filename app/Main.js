import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Main(props) {
  return (
    <View style={[styles.main, props.style]}>
      <Text>Content goes here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#dddddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
