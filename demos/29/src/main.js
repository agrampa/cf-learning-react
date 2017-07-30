import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return(
      <main className='app'>
        <h1>Hello World</h1>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
