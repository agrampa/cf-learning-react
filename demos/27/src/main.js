
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

const API_URL = 'http://pokeapi.com/api/v2';

// create a form container component every time you creat a form
// the component will have its own state and will manage the state of the form's inputs
// a form container is a component that holds the state for a form's inputs
class PokemonForm extends React.Component {
  constructor(props){
    super(props)

    // controlled inputs: all inputs should have their value bound to a state
    this.state = {  // form values need to be bound to component state
      pokeName: ''
    }

    this.handlePokeNameChange = this.handlePokeNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handlePokeNameChange(e) {
    this.setState({pokeName = e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault(); // needed for submit events
    this.props.selectPokemon(this.state.pokeName)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          placeholder="pokemon name"
          onChange={this.handlePokeNameChange}
          value={this.state.pokeName}
        />
        <p>Name: </p>
        <p>{ this.state.pokeName }</p>
      </form>
    )
  }
}



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonLookup: {},
      pokemonSelected: null,
      pokemonNameError: '',
    }
  }

  // called every time the state changes
  componentWillUpdate() {
    // debugging
    console.log('___STATE____', this.state);
  }

  // this will be called once right before the app component mounts/is added to DOM
  // componentWillMount(){
  componentDidMount(){
    if(localStorage.pokemonLookup) {
      try{
        let pokemonLookup = JSON.parse(localStorage.pokemonLookup)
        this.setState({pokemonLookup})
      } catch(err) {
        console.error(err);
      }
    } else {
      superagent.get(`${API_URL}/pokemon/`)
      // will replace state pokemonLookup array with response
      .then(res => {
        let pokemonLookup = res.body.results.reduce((lookup, next) => {
          lookup[next.name] = next.url;
          return lookup;
        }, {}) // every lookup will add to the object

        try {
          localStorage.pokemonLookup = JSON.stringify(pokemonLookup)
          this.setState({pokemonLookup})
        } catch(err) {
          console.error(err);
        }
      })
      .catch(console.error())
    }
  }

  selectPokemon(name) {
    if(!pokemonLookup[name]) {
      // do something on state that enables the view to show an error that the pokemon does not exist
      this.setState({
        pokemonSelected: null,
        pokemonNameError: name,
      })
    } else {
      // make a request to the pokemon api and do something on state to store the poke's details to be displayed to the user
      superagent.get(pokemonLookup[name])
      .then(res => {

      })
      .catch(console.error)
    }
  }

  render(){
    return(
      <div>
        <h1>Form Demo</h1>
        // the form needs access to selectPokemon if it is every going to access it, pass in via props
        <PokemonForm selectPokemon={this.selectPokemon} />
        <p>Pokemon name error: {this.state.pokemonNameError}</p>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
