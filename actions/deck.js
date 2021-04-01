export const GET_DECKS = 'GET_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const DELETE_DECK = 'DELETE_DECK'
import {saveDeck, getDeck} from '../utils/api'

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

export function handleCreateDeck (title) {
  return (dispatch) => {
    return saveDeck(title)
      .then(() => dispatch(createDecks(title)))
  }
}

export function handleGetDeck (title) {
  return (dispatch) => {
    return getDeck(title)
  }
}