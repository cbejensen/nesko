import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function TableRow(props) {
  return (
    <View style={styles.row}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 50
  }
});
