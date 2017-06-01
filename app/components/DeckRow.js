import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default function DeckRow(props) {
  let total = 0;
  props.cards.forEach(card => {
    total += card.score;
  });
  const avg = total / props.cards.length;
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="#ffffff"
    >
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text>
          Cards: {props.cards.length}
        </Text>
        <Text>Average score: {avg}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});