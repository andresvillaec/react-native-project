import { GET_DECKS, CREATE_DECK, ADD_CARD } from '../actions/deck'

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
      }
    case ADD_CARD :
      const { question, answer, correctAnswer } = action.card;
      
			return {
				...state,
				[action.title]: {
					...state[action.title],
					questions: [...state[action.title].questions, { question, answer, correctAnswer }],
				},
			};
    default :
      return state
  }
}

export default decks