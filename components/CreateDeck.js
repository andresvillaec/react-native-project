import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { white, purple } from '../utils/colors'
import {handleCreateDeck} from '../actions/deck'
import SubmitButton from '../elements/SubmitButton'

function mapStateToProps(state) {
  return {

  };
}

class CreateDeck extends Component {
  state = {
    title: ''
  }

  submit = () => {
    const {title} = this.state
    const {navigation, dispatch} = this.props
    dispatch(handleCreateDeck(title))
    this.setState({ title: ''});
    navigation.goBack()
  }

  render() {
    const { title } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>
            What is the title of your new deck?
          </Text>
        </View>
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            value={title}
            placeholder='Deck Title'
            onChangeText={(text) => this.setState({title: text})}
          />
        </View> 
        <View style={styles.box}>
          <SubmitButton onPress={this.submit} Name='Create Deck' />
        </View>
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
  box: {
    marginBottom: 35,
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 32
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

export default connect(
  mapStateToProps,
)(CreateDeck);