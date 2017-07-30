import React from 'react';

class ExpenseCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name} = e.target // set to e.target.name
    this.setState({
      [name]: e.target.value // use this variable to set a variable as the key-value
      // [e.target.name]: e.target.value  <- can also do it this way without setting the variable name
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleExpenseCreate(this.state); // pass in this.state because this.state has a title and price
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      // needs to have the same name of the item it is updating
        <input
          name='title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
          />
        <input
          name='price'
          type='number'
          value={this.state.price}
          onChange={this.handleChange}
          />
          <button type='submit'> + </button>
      </form>
    )
  }
}

export default ExpenseCreateForm;
