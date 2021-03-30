import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class CreateDeck extends Component {
  render() {
    return (
      <div>
        Create Deck
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(CreateDeck);