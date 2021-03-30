import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class DeckList extends Component {
  render() {
    return (
      <div>
        DeckList
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(DeckList);