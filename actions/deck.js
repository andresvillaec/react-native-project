export const GET_DECKS = 'GET_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'

import {saveDeck, loadInitialData, _addCard, _removeDeck} from '../utils/api'

export function loadDecks (decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}

export function createDecks (title) {
  return {
    type: CREATE_DECK,
    title,
  }
}

export function deleteDeck (id) {
  return {
    type: DELETE_DECK,
    id
  }
}

export function addCard (title, card) {
  return {
    type: ADD_CARD,
    title,
    card,
  }
}

export function handleCreateDeck (title) {
  return (dispatch) => {
    return saveDeck(title)
      .then(() => dispatch(createDecks(title)))
  }
}

export function handleInitialData() {
	return (dispatch) => {
    return  loadInitialData()
    .then((decks) => {
			dispatch(loadDecks(decks));
		});
	};
}

export function handleAddCard(title, card) {
	return (dispatch) => {
    return _addCard(title, card)
    .then(() => {
			dispatch(addCard(title, card));
		});
	};
}


export function handleDeleteCard(id) {
	return (dispatch) => {
    return _removeDeck(id)
    .then(() => {
			dispatch(deleteDeck(id));
		});
	};
}

