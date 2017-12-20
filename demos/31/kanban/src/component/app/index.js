import React from 'react'
import {Provider} from 'react-redux'
// Provider registers the store so, later on, you can connect the store to the components
import {BrowserRouter, Route} from 'react-dom'

import createAppStore from '../../lib/store.js'
import DashboardContainer from '../dashboard-container'

const store = createAppStore()

class App extends React.Component {
  componentDidMount(){
    store.subscribe(() => {
      console.log('__STATE__', store.getState());
    })
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Route expact path='/' component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App
