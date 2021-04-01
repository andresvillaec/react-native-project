import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet} from 'react-native'
import { white, purple, red } from '../utils/colors'
import SubmitButton from '../elements/SubmitButton'

export class QuizItem extends Component {
  state = {
    alert : 'Answer'
  }

  render() {
    const {quiz} = this.props
    const {alert} = this.state
    const {question, answer} = quiz

    return (
      <View style={styles.container}>
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

function mapStateToProps (state) {
  var quiz = {
    question: 'What is React?',
    answer: 'A library for managing user interfaces'
  }

  return {
    quiz
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizItem)
