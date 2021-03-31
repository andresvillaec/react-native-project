import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { white, purple } from '../utils/colors'

export default function SubmitBtn ({ onPress, Name, customStyles }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={[styles.submitBtnText, customStyles]}>{Name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 1,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    color: white,
    fontSize: 40,
    marginTop:25,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:25,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});