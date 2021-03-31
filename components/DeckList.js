import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text } from 'react-native';
import DeckItem from './DeckItem'

function mapStateToProps(state) {
  return {

  };
}

class DeckList extends Component {
  render() {
    const {navigation} = this.props
    console.log(navigation)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DeckItem')}
      />
      </View>
      
    );
  }
}

export default connect(
  mapStateToProps,
)(DeckList);