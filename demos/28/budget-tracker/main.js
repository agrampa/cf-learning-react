// import './style/main.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
// import {BrowserRouter as Router} <- can rename here

// App component will return all of the other components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidUpdate() {
    console.log('___STATE___', this.state);
  }

  render() {
    return(
      <main>
        <BrowserRouter>
          <Route exact path='/about' component={AboutContainer} />
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
