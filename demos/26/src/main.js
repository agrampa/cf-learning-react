// no more need for 'use strict', ES6 will automatically use it

// use components, using JSX:
import React from 'react'; // === const React = require('react');
// now we can render JSX
import ReactDom from 'react-dom';

class Navbar extends React.Component {
  render() {
    return(
      <header>
        <h1> Counter </h1>
      </header>
    )
  }
}

class App extends React.Component { // App is the name of the component
  // debatable if this is really needed
  constructor(props) { // naming convention for argument for component
    super(props) // tells react.component everything that was passed in, and want it to have all of the things the component would, always needs constructor and render
  }
  render() { // NECESSARY - returns some JSX
    return()
      <div>
        <Navbar /> // now navbar will show up first, then the h1 below 
        <h1>Cool</h1>
      </div>
  }
}

ReactDom.render(<App />, document.getElementById('root'));
