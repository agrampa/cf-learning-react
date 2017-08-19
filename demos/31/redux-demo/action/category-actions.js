// action creators are helper functions to create actions
// ONLY use action creators throughout your app, never hard-code action literals in your app

// make sure actions are in their own folder, because they can trigger multiplle reducers


// use action creators instead of typing the same category.id and uuid each time
// fewer changes for typos, plus there is extra logic included here that you don't want to have to do every time

// reducer defines state and interactions, action creators return actions

export const categoryCreate = (category) => {
  category.id = uuid()
  category.timestamp = new Date()
  return{
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category,
})

export const categoryReset = () => ({type: 'CATEGORY_RESET'})


// NEED parens around curlys because there are NOT code blocks
// this will allow the object to be returned, since there are parens for the return and curlys for the object 
