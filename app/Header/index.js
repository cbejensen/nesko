import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(props) {
  return (
    <View style={[styles.header, props.style]}>
      <View style={styles.inner}>
        <Text style={styles.text}>NESKO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'tomato'
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 28
  }
});
