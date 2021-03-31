import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {loadInitialDecks} from '../utils/api'

function mapStateToProps({decks}) {
  return {
    loadInitialDecks,
    decks : {
      React: {
          title: 'React',
          questions: [
              {
                  question: 'What is React?',
                  answer: 'A library for managing user interfaces'
              },
              {
                  question: 'Where do you make Ajax requests in React?',
                  answer: 'The componentDidMount lifecycle event'
              }
          ]
      },
      JavaScript: {
          title: 'JavaScript',
          questions: [
              {
                  question: 'What is a closure?',
                  answer: 'The combination of a function and the lexical environment within which that function was declared.'
              }
          ]
      }
  }
  };
}

class DeckList extends Component {
  submit = (deck) => {
    this.props.navigation.navigate("DeckItem", {
      title: deck.title,
      navigation: this.props.navigation
    });
  }

  componentDidMount() {
    const { loadInitialDecks } = this.props;

    loadInitialDecks();
  }

  render() {
    const {decks} = this.props
    console.log(decks)
    console.log(this.props)

    return (
      <View style={styles.container}>
        {decks &&
            Object.keys(decks).map(id => (
              <TouchableOpacity
                key={id}
                style={styles.section}
                onPress={() => this.submit(decks[id])}
                >
                  <Text style={styles.submitBtnText}>{decks[id].title}</Text>
                  <Text style={styles.submitBtnText}>{decks[id].questions.length}</Text>
              </TouchableOpacity>
            ))}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    justifyContent: 'center',
  },
  section: {
    padding: 20,
    borderRadius: 7,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    alignContent: 'center',
  },
  submitBtnText: {
    fontSize: 22,
    textAlign: 'center',
  },
});

export default connect(
  mapStateToProps,
)(DeckList);