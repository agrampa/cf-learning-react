
import React from 'react';
import ReactDom from 'react-dom';

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
