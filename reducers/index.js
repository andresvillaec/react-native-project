import { GET_DECKS, CREATE_DECK } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case GET_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case CREATE_DECK :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}

export default entries