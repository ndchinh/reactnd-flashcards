import { decks } from '../utils/_DATA'
import { FETCH_DECKS, NEW_DECK, ADD_CARD_TO_DECK, EDIT_DECK, DELETE_DECK } from '../actions/decks'

const initialState = {
  decks,
}

export default (state = initialState, action) => {
  switch ( action.type ) {
    case NEW_DECK:
      return {
        ...state,
        decks: [...state.decks, action.deck]
      }

    // case ADD_DECK_FIRE:
    //   return {
    //     ...state,
    //     ...action.newDeck
    //   }

    default: 
      return state
  }
}

// import { 
//   ADD_DECK,
//   EDIT_DECK, 
//   DELETE_DECK,
// } from '../actions'

// function decks ( state = {}, action ) {
//   switch (action.type) {
//     case RECEIVE_DECKS:
//       return {
//         ...state,
//         ...action.decks,
//       }
//     case ADD_DECK:
//       return {
//         ...state,
//         ...action.deck,
//       }
//     case EDIT_DECK:
//       return state
//     case DELETE_DECK:
//       return state
//     default:
//       return state
//   }
// }

// export default decks