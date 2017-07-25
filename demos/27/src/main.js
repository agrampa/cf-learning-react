
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
  }

  handlePokeNameChange(e) {
    this.setState({pokeName = e.target.value})
  }

  render(){
    return(
      <form>
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
      pokemonLookup: [],
    }
  }

  // this will be called once right before the app component mounts/is added to DOM
  componentWillMount(){
    superagent.get(`${API_URL}/pokemon/`)
    // will replace state pokemonLookup array with response
    .then(res => {
      this.setState({pokemonLoopup: res.body.results})
    })
    .catch(console.error())
  }

  render(){
    return(
      <div>
        <h1>Form Demo</h1>
        <PokemonForm />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
