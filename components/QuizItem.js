import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet} from 'react-native'
import { white, purple, red, black} from '../utils/colors'
import SubmitButton from '../elements/SubmitButton'

export class QuizItem extends Component {
  state = {
    currentCard: 1,
    correctAnswers: 0,
    responses: 0,
    showAnswer: false,
  }

  correctAnswer = () => {
    this.setState({ 
      currentCard: this.state.currentCard + 1,
      responses: this.state.responses + 1,
      correctAnswers: this.state.correctAnswers + 1,
      showAnswer: false,
    });
  }

  incorrectAnswer = () => {
    this.setState({ 
      currentCard: this.state.currentCard + 1,
      responses: this.state.responses + 1,
      showAnswer: false,
    });
  }

  toggleAnswer = () => {
    this.setState({ 
      showAnswer: !this.state.showAnswer 
    });
  }

  restartQuiz = () => {
    this.setState({ 
      currentCard: 1,
      correctAnswers: 0,
      responses: 0,
      showAnswer: false,
    });
  }

  goToDeck = () => {
    const {navigation} = this.props
    navigation.goBack()
  }

  render() {
    const {decks, route} = this.props
    const {currentCard, responses, correctAnswers, showAnswer} = this.state
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

    const totalCards = deck.questions.length

    if (responses === totalCards) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Resultado {correctAnswers}/{totalCards}
          </Text>
          <SubmitButton onPress={this.restartQuiz} Name="Restart Quiz" customStyles={styles.secondaryButton} />
          <SubmitButton onPress={this.goToDeck} Name='Back to Deck' />
        </View>)
    }

    const index = currentCard - 1
    const {question, answer} = deck.questions[index]
    const answerTextButton = !showAnswer ? 'Show Answer' : 'Show Question'

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {currentCard}/{totalCards}
        </Text>
        <View style={styles.box}>
          {showAnswer ?
            <Text style={styles.title}>
              {answer}
            </Text>
            : 
            <Text style={styles.title}>
              {question}
            </Text>
          }
        </View>
          <SubmitButton onPress={this.toggleAnswer} Name={answerTextButton} customStyles={styles.secondaryButton} />
          <SubmitButton onPress={this.correctAnswer} Name='Correct' />
          <SubmitButton onPress={this.incorrectAnswer} Name='Incorrect' />
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
  secondaryButton: {
    textAlign: 'center',
    backgroundColor: white,
    color:black,
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
