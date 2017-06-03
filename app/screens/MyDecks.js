import React from 'react';
import DeckList from '../containers/DeckList';

class MyDecks extends React.Component {
  static navigationOptions = {
    title: 'My Decks'
  };
  render() {
    return <DeckList {...this.props} />;
  }
}

export default MyDecks;
