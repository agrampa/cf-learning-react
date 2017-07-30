// import './style/main.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

const API_URL = 'http://www.reddit.com/r';

// Project structure:
// App (manages application state)
//   SearchForm (collect user input)
//   SearchResultsList (display reddit posts)

class SearchForm extends React.Component{
  render() {
    return <p>Search Form</p>
  }
}

class SearchResultsList extends React.Component{
  render() {
    return <p>Search Results List</p>
  }
}

// App will hold all application state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state {
      results: null, // easier to start at null instead of empty array so we can use a conditional later
      searchErrorMessage: null,
    }

    this.redditBoardFetch = this.redditBoardFetch.bind(this);
  }

  componentDidUpdate() {
    console.log('___STATE___', this.state);
  }

  redditBoardFetch(board) {
    superagent.get('${API_URL}/${board}.json')
      .then(res => {
        results: res.body,
        searchErrorMessage: null,
      })
      .catch(err => {
        this.setState({
          results: null,
          searchErrorMessage: `Unable to find board ${board}`,
        })
      })
  }

  render() {
    return(
      <main>
        <h1>cool beans</h1> // testing out to make sure webpack builds properly
        <SearchForm /> // nested component
        <SearchResultsList /> // nested component
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
