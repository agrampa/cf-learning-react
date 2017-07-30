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
    let {name, value, type} = e.target;

    if(type === 'number') {
      try {
        this.setState({
          // use [name] to use the variable as the key, instead of using name: as the property
          // will show up as expenseEntered: priceEntered
          [name]: parseInt(value)
        })
      } catch(err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // passed into here from dashboard via props
    this.props.expenseCreate(this.state);
  }

  render() {
    return(
      <form className='expense-create-form'
        onSubmit={this.handleSubmit}
        // value and onChange are required for EVERY input
        <input name='title' type='text' value={this.state.title} onChange={this.handleChange} />
        <input name='price' type='text' value={this.state.price} onChange={this.handleChange} />

        <button type='submit'> + Add Expense </button>
      </form>
    )
  }
}
