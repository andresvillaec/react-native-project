import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

function mapStateToProps(state) {
  return {

  };
}

class CreateDeck extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text>
          Create Deck
        </Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
)(CreateDeck);