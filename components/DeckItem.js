import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { gray, black, purple, white } from '../utils/colors'
import Button from '../elements/Button'

export class DeckItem extends Component {
  addCard = () => {
    this.props.navigation.navigate("AddCard", {
      title: 'React',
      navigation: this.props.navigation
    });
  }

  startQuiz = () => {
    const {title} = this.state
    const {navigation, dispatch} = this.props
    console.log(this.props)
    dispatch(handleCreateDeck(title))
    navigation.goBack()
    
  }

  render() {
    // console.log(this.props)
    const {route, deck} = this.props
    const {title} = route && route.params ? route.params : ''

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{deck.title}</Text>
        <Text style={styles.subtitleText}>{deck.questions.length} cards</Text>
        <Button customStyles={styles.secondaryButton} onPress={this.addCard} Name='Add Card' />
        <Button onPress={this.startQuiz} Name='Start Quiz' />

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
  }

});

export default connect(mapStateToProps)(DeckItem)
