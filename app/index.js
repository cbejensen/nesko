import React from 'react';
import { StackNavigator } from 'react-navigation';
import { MyDecks, Deck } from './screens';

const App = StackNavigator({
  Decks: { screen: MyDecks },
  Deck: {screen: Deck}
});

export default App;
