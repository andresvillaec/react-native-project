import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, StyleSheet, Text} from 'react-native'
import TextInput from '../elements/TextInput'
import SubmitButton from '../elements/SubmitButton'
import { gray } from '../utils/colors'
import {handleAddCard} from '../actions/deck'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  onChangeTextQuestion = (text) => {
    this.setState({question: text})
  }
  onChangeTextAnswer = (text) => {
    this.setState({answer: text})
  }

  addCard = () => {
    const {navigation, dispatch, route} = this.props
    console.log(this.props)
    const {title} = route.params
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };

    dispatch(handleAddCard(title, card))
    this.setState({ question: '', answer: '' });
    navigation.goBack()
  }

  render() {
    const {question, answer} = this.state
    const {navigation, dispatch, route} = this.props
    const {title} = route.params

    return (
      <View style={styles.container}>
        <Text style={styles.subtitleText}>Deck: {title}</Text>
        <TextInput 
          placeholder = 'Question'
          onChangeText ={this.onChangeTextQuestion}
          value = {question}
        />
        <TextInput 
          placeholder = 'Answer'
          onChangeText ={this.onChangeTextAnswer}
          value = {answer}
        />
        <SubmitButton 
          onPress={this.addCard} 
          Name='Add Card' 
        />
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
  subtitleText: {
    color: gray,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 45,
  },
});

function mapStateToProps() {
  return {
  };
}

export default connect(mapStateToProps)(AddCard);
