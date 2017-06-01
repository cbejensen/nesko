import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TableCell(props) {
  return (
    <View style={styles.cell}>
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    padding: 5,
    flex: 1,
    justifyContent: 'center'
  }
});
