import React from 'react';
import DeckList from '../containers/DeckList';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default function Main(props) {
  return (
    <View style={[styles.main, props.style]}>
      <DeckList />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#dddddd'
  }
});
