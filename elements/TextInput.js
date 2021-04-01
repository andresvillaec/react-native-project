import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { View, white, purple } from '../utils/colors'

export default function CustomTextInput ({ onChangeText, placeholder, value }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  box: {
    marginBottom: 35,
    alignContent: 'center',
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