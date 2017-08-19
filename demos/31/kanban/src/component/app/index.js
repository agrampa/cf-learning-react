import React from 'react'
import {BrowserRouter, Route} from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <h1>Hello from App</h1>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
