'use strict'

initialState = []

// categories will have an id and a title

reducer = (state=initialState, action) {
  let {type, payload} = action

  switch(type) {
    // three operations for the state

    // take category as payload and push into array
    case 'CATEGORY_CREATE':
      return [...state, payload]

    // take category as payload and update it in the array, using category id
    case 'CATEGORY_UPDATE':
      return state.map(category => category.id == payload.id ? payload : category)
    // take category as payload and delete it from the array
    case 'CATEGORY_DELETE':
      return state.filter(category => category.id != payload.id)
    default:
      return state
  }
}
