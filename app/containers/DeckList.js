import React, { Component } from 'react';
import DeckRow from '../components/DeckRow';
import RowSeparator from '../components/RowSeperator';
import {
  View,
  ListView,
  Text,
  StyleSheet
} from 'react-native';

class DeckList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const decks = [
      {
        name: 'New Testament',
        created: '2017-06-02',
        cards: [
          {
            front: '1 Timothy 3:16',
            back: 'All Scripture is God-breathed',
            score: 3
          },
          {
            front: 'John 1:1',
            back: 'In the beginning was the Word',
            score: 4
          }
        ]
      },
      {
        name: 'Old Testament',
        created: '2015-11-17',
        cards: [
          {
            front: 'Genesis 1:1',
            back: 'In the beginning, God created the heavens and the earth.',
            score: 2
          }
        ]
      }
    ];
    this.state = {
      dataSource: ds.cloneWithRows(decks)
    };
  }
  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <DeckRow {...rowData} {...this.props} />
          )}
          renderSeparator={() => <RowSeparator />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    margin: 10,
    textAlign: 'center'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'red'
  }
});

export default DeckList;
