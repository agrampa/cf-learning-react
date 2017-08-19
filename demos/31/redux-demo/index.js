import {createStore} from 'redux'
import categoryReducer from '././reducer/category.js'
import {categoryCreate, categoryUpdate, categoryDelete, categoryReset} from './action/category-actions.js'


const store = createStore(categoryReducer)

// store.getState() will return the initial state of the store as defined in the reducer

// dispatch an action
store.dispatch(categoryCreate({title: 'cool beans'}))
