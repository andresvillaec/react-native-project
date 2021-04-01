import { GET_DECKS, CREATE_DECK } from '../actions/deck'

function decks (state = {}, action) {
  switch (action.type) {
    case GET_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case CREATE_DECK :
      const { title } = action;
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      };
    default :
      return state
  }
}

export default decks