import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import TextInput from '../elements/TextInput'
import Button from '../elements/Button'

export default class AddCard extends Component {
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
    const {navigation, dispatch} = this.props
    //TODO: Add to store
    navigation.goBack()
  }

  render() {
    const {question, answer} = this.state

    return (
      <View style={styles.container}>
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
        <Button 
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
});