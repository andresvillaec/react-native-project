import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native'
import { gray, black, white, red } from '../utils/colors'
import SubmitButton from '../elements/SubmitButton'

class DeckItem extends Component {
  addCard = () => {
    this.props.navigation.navigate("AddCard", {
      title: this.props.route.params.title,
      navigation: this.props.navigation
    });
  }

  startQuiz = () => {
    this.props.navigation.navigate("QuizItem", {
      title: this.props.route.params.title,
      navigation: this.props.navigation
    });
  }

  deleteDeck = () => {
    //TODO: Delete deck
  }

  render() {
    const {route, decks} = this.props
    const {title, questionsNumbers} = route.params
    const deck = decks[title]

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitleText}>{deck.questions.length} cards</Text>
        <SubmitButton customStyles={styles.secondaryButton} onPress={this.addCard} Name='Add Card' />
        <SubmitButton onPress={this.startQuiz} Name='Start Quiz' />
        <SubmitButton customStyles={styles.secondaryButton} onPress={this.deleteDeck} Name='Delete deck' />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    justifyContent: 'center',
  },
  titleText: {
    color: black,
    fontSize: 40,
    textAlign: 'center',
  },
  subtitleText: {
    color: gray,
    fontSize: 24,
    textAlign: 'center',
  },
  secondaryButton: {
    textAlign: 'center',
    backgroundColor: white,
    color:black,
  },
  deleteButton :{
    backgroundColor: white,
    color:red,
    marginTop: 50,
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DeckItem);

