import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {getDecks} from '../utils/api'

export default class DeckList extends Component {
  state = {
    decks: {}
  };

  loadDecks = async () => {
      this.setState({decks: await getDecks()})
  }

  componentDidMount() {
      this.loadDecks();
      this.props.navigation.addListener('focus', () => {
          this.loadDecks();
      });
  }

  submit = (deck) => {
    this.props.navigation.navigate("DeckItem", {
      title: deck.title,
      navigation: this.props.navigation
    });
  }

  render() {
    const {decks} = this.state
    console.log(decks)
    console.log(this.props)

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {decks &&
              Object.keys(decks).map(id => (
                <TouchableOpacity
                  key={id}
                  style={styles.section}
                  onPress={() => this.submit(decks[id])}
                  >
                    <Text style={styles.submitBtnText}>{decks[id].title}</Text>
                    <Text style={styles.submitBtnText}>{decks[id].questions.length}</Text>
                </TouchableOpacity>
              ))}
        </ScrollView>
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    justifyContent: 'center',
  },
  section: {
    padding: 20,
    borderRadius: 7,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    alignContent: 'center',
  },
  submitBtnText: {
    fontSize: 22,
    textAlign: 'center',
  },
});
