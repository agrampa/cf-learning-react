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

    this.handleClick = this.handleClick.bind(this); // take the method and saying that no matter where it is called, it will always refer to this context of APP, not anything else that invokes it
  }

  handleClick(e) { // e refers to the event, the virtual event on the virtual DOM, which gets translated to the actual dom when react.render is invoked
    this.setState({ count: 4 }) // this refers to the instance of the constructor
  }

  render() { // NECESSARY - returns some JSX
    return()
      <div>
        <Navbar /> // now navbar will show up first, then the h1 below
        <Navbar /> // now there will be two instances of the same navbar
        <h1>Cool</h1>
        <p onClick={this.handleClick}>Count: { this.state.count }</p> // how handleClick is a prop (property) of <p>
      </div>
  }
}

ReactDom.render(<App />, document.getElementById('root'));
