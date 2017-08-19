import {createStore} from 'redux'

import reducer from '../reducer/category.js'

// creates a new store every time you want to test the store, will be unique
// only works if it is in a function, otherwise will return the same store every time if written as:
// export default createStore(reducer)
export default () => createStore(reducer)
