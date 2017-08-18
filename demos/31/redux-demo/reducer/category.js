'use strict'

initialState = []
reducer = (state=initialState, action) {
  let {type, payload} = action

  switch(type) {
    // three operations for the state

    // take board as payload and push into array
    case 'CATEGORY_CREATE':

    // take board as payload and update it in the array
    case 'CATEGORY_UPDATE':

    // take board as payload and delete it from the array
    case 'CATEGORY_DELETE':
    default:
      return state
  }
}
