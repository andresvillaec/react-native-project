import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import { gray, black, white, red } from '../utils/colors'
import SubmitButton from '../elements/SubmitButton'

export class DeckItem extends Component {
  addCard = () => {
    this.props.navigation.navigate("AddCard", {
      title: 'React',
      navigation: this.props.navigation
    });
  }

  startQuiz = () => {
    //TODO: Go to quiz
  }

  deleteDeck = () => {
    //TODO: Delete deck
  }

  render() {
    // console.log(this.props)
    const {route, deck} = this.props
    const {title} = route && route.params ? route.params : ''

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{deck.title}</Text>
        <Text style={styles.subtitleText}>{deck.questions.length} cards</Text>
        <SubmitButton customStyles={styles.secondaryButton} onPress={this.addCard} Name='Add Card' />
        <SubmitButton onPress={this.startQuiz} Name='Start Quiz' />
        <SubmitButton customStyles={styles.secondaryButton} onPress={this.deleteDeck} Name='Delete deck' />
      </View>
    )
  }
}

function mapStateToProps (state) {

  //TODO: Get from api
  var tempDeck = {
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
  }

  return {
    deck: tempDeck
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

export default connect(mapStateToProps)(DeckItem)
