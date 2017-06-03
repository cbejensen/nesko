import React from 'react';
import DeckList from '../containers/DeckList';
import { Text } from 'react-native';

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });
  render() {
    return (
      <Text>
        You are viewing the
        {' '}
        {this.props.navigation.state.params.title}
        {' '}
        deck
      </Text>
    );
  }
}

export default Deck;
