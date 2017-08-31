import {combineReducers} from 'redux'

import cardsReducer from './cards.js'
import categoryReducer from './category.js'

export default combineReducers({
  cards: cardsReducer,
  category: categoryReducer,
})