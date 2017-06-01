import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function RowSeparator(props) {
  return <View style={[styles.line, props.style]} />;
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#000000',
    height: StyleSheet.hairlineWidth
  }
});
