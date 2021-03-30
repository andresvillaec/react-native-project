export const GET_DECKS = 'GET_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const DELETE_DECK = 'DELETE_DECK'

export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}

export function createDecks (deck) {
  return {
    type: CREATE_DECK,
    deck,
  }
}

export function deleteDecks (id) {
  return {
    type: DELETE_DECK,
    
  }
}
