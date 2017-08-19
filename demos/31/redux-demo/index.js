import {createStore} from 'redux'
import categoryReducer from '././reducer/category.js'
import {categoryCreate, categoryUpdate, categoryDelete, categoryReset} from './action/category-actions.js'

// store is the interface to the state

const store = createStore(categoryReducer)

// subscribe can be called multiple times with other callbacks
// every time an action is dispatched and state has updated, subscribe will be called
store.subscribe(() => {
  console.log('__STATE__', store.getState())
})

// store.getState() will return the initial state of the store as defined in the reducer

// dispatch an action
// dispatch takes the state of the store, and replaces it with whatever results from dispatching/calling the action
store.dispatch(categoryCreate({title: 'cool beans'}))

// now store.getState() will return the new state with the title, and added uuid and timestamp


// it is easier to write it using actions rather than using the code below:
store.dispatch({
  type: 'CATEGORY_CREATE',
  payload: {
    title: 'cool beans'
    id: uuid()
    timestamp: new Date()
  }
})
