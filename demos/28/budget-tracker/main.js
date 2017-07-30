// import './style/main.scss'

// npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
// import {BrowserRouter as Router} <- can rename here

// app modules
import AboutContainer from './component/about-container'; // will automatically look for and import index.js file
import DashboardContainer from './component/dashboard-container';

// App component will return all of the other components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: 400,
      expenses: [],
    }

    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate() {
    console.log('___STATE___', this.state);
  }

  // general context to pass along the state of App along whenever this function is called
  // passed along every time a component is used
  // call getApp within App, and getApp is also bound to the App
  // getApp's context is the App component because it is bound
  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render() {
    return(
      <main>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={AboutContainer} />
            <Route exact path='/about' component={AboutContainer} />
            <Route
              exact path='/dashboard'
              // a way to get props into the dashboard route
              component={() => <DashboardContainer app={this.getApp()} />} />
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
