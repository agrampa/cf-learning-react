'use strict'

// function signature of a redux reducer (oldState, action) => newState
// different than array.prototype.reduce
// redux reducers will both define the state, and the interactions to the state

// an action is an object with two properties (type, payload)
// actions are passed into a reducer, and the reducer can use the action to update the state

// never perform any mutations in reducers, so using something like initialState++ is BAD

// if no action is provided, the default will be returned

// define types using all caps and snake_case: INC_NUM

let initialState = 0

export default (state=initialState, action) => {
  let {type, payload} = action

  switch(type) {
    case 'INCREMENT':
      // return state + 1
      return state + (payload ? payload : 1)
    case 'DECREMENT':
      // return state - 1
      return state - (payload ? payload : 1)
    default:
      return state
  }
}

// reducer(14, {type: 'INC', payload: 12}) -- will return 26
