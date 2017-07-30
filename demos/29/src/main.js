import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <main className='app'>
        <header>
          <h1>Budget Tracker</h1>
          <nav>
            <ul>
            // link is an anchor tag that will update browser history without refreshing the page
              <li><Link to='/'>Dashboard</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
        </header>
        <BrowserRouter> // browser router can only have one thing, but the div can have a lot
          <div>
            <Route exact path='/' component={DashboardContainer} />
            <Route exact path='/about' component={Dashboard} />
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));






// this is a stateful component
// has state
// has lifecycle hooks
class App extends React.Component {
  render() {
    return(
      <main className='app'>
        <h1>Hello World {this.props.title}</h1>
      </main>
    )
  }
}

ReactDom.render(<App title='cool beans' />, document.getElementById('root'));

// this a presentation component
// cannot have state
// cannot have lifecycle hook
// better to write as classes off the bat so state can be added, rather than needing to refactor every time state is needed
const App = (props) => {
  return(
    <main className='app'>
      <h1>Hello World {props.title}</h1>
    </main>
  )
}

ReactDom.render(<App title='cool beans' />, document.getElementById('root'));
