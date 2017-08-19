import {createStore} from 'redux'
import categoryReducer from '././reducer/category.js'
import {categoryCreate, categoryUpdate, categoryDelete, categoryReset} from './action/category-actions.js'


const store = createStore(categoryReducer)

// store.getState() will return the initial state of the store as defined in the reducer

// dispatch an action
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
