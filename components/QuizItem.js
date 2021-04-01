import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet} from 'react-native'
import { white, purple, red } from '../utils/colors'
import SubmitButton from '../elements/SubmitButton'

export class QuizItem extends Component {
  state = {
    alert : 'Answer', 
    currentCard: 1,
    correctAnswers: 1,
    responses: 0,
  }

  correctAnswer = () => {
    this.setState({ 
      currentCard: currentCard + 1,
      responses: responses + 1,

    });
  }

  render() {
    const {decks, route} = this.props
    const {currentCard} = this.state
    const {title} = route.params
    const deck = decks ? decks[title] : null

    
    if (deck === null || deck.questions.length  === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Sorry, you cannot take a quiz because there are no cards in the deck
          </Text>
        </View>)
    }

    const index = currentCard - 1
    const {question, answer} = deck.questions[index]
    const totalCards = deck.questions.length + 1

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {currentCard}/{totalCards}
        </Text>
        <View style={styles.box}>
          <Text style={styles.title}>
            {question}
          </Text>
          <Text style={styles.alert}>
            {alert}
          </Text>
        </View>
          <SubmitButton onPress={this.submit} Name='Correct' />
          <SubmitButton onPress={this.submit} Name='Incorrect' />
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
  box: {
    marginBottom: 35,
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  },
  alert: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: red,
  },
  input: {
    borderWidth: 1,
    borderColor: purple,
    backgroundColor: white,
    padding:10,
    borderRadius: 5,
    fontSize: 20,
    height: 50,
    marginBottom: 20
  },
});

function mapStateToProps(decks) {
  console.log(decks)
  return {
    decks,
  };
}
export default connect(mapStateToProps)(QuizItem)
