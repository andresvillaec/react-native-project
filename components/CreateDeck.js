import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { white, purple } from '../utils/colors'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>Submit</Text>
    </TouchableOpacity>
  )
}

export default class CreateDeck extends Component {
  state = {
    title: ''
  }

  submit = (e) => {
    const {title} = this.state
    const {navigation} = this.props
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
            onChangeText={(text) => this.setState({title: text})}
          />
        </View> 
        <View style={styles.box}>
          <SubmitBtn onPress={this.submit} />
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
    fontSize: 15,
    height: 50,
    marginBottom: 20
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    color: white,
    fontSize: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});
