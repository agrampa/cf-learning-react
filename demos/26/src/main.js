// no more need for 'use strict', ES6 will automatically use it

// use components, using JSX:
import React from 'react'; // === const React = require('react');
// now we can render JSX
import ReactDom from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header className="navbar"> // classes need to be added to standard element, cannot be added below to <Navbar />
        <h1> Counter </h1>
      </header>
    )
  }
}

class App extends React.Component { // App is the name of the component
  // debatable if this is really needed, howerver IS needed in order to set initial STATE
  constructor(props) { // naming convention for argument for component
    super(props) // tells react.component everything that was passed in, and want it to have all of the things the component would, always needs constructor and render
    this.state = { // IMMUTABLE
      count: 0,
    }
  }
  render() { // NECESSARY - returns some JSX
    return()
      <div>
        <Navbar /> // now navbar will show up first, then the h1 below
        <Navbar /> // now there will be two instances of the same navbar
        <h1>Cool</h1>
        <p>Count: { this.state.count }</p>
      </div>
  }
}

ReactDom.render(<App />, document.getElementById('root'));
