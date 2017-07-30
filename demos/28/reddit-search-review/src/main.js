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
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.searchText); // pass in redditBoardFetch through props from parent
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> // use form instead of input for screen readers
        <label>{this.props.title}</label>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.searchText}
        />
        <button type='submit'>Search</button>
      </form>
    );
  }
}

// should receive an array of reddit articles through props
class SearchResultsList extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    let articles = this.props.articles || [];
    return (
      <ul>
        // implicit return with curly braces starting on the next line and closing after the function, otherwise need to specifically return it
        articles.map((item, i) => { // when using map, react requires that the outermost item has a key that is a unique value for EACH ONE within this map callback, so use the index bc it is already unique
          // faster rendering times with the key
          <li key={i}>
            // hello
            <a href={item.data.url}>{item.data.title}</a>
          </li>
        })
      </ul>
    )
  }
}

// App will hold all application state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        console.log('request successful, res:', res);
        results: res.body.data.children,
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
        // search form needs to have the redditBoardFetch method here or else it will say that redditBoardFetch is not a function
        <SearchForm title='Reddit board' handleSearch={this.redditBoardFetch}/> // nested component
        <SearchResultsList articles={this.state.results || []}/> // nested component
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
