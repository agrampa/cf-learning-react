// import './style/main.scss'

import React from 'react';
import ReactDOM from 'react-dom';

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
        <p>Hello World</p>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
