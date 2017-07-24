
import React from 'react';
import ReactDom from 'react-dom';

// create a form container component every time you creat a form
// the component will have its own state and will manage the state of the form's inputs
// a form container is a component that holds the state for a form's inputs
class PokemonForm extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <form>

      </form>
    )
  }
}



class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Form Demo</h1>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
