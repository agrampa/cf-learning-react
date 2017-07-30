import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    let title = props.expense ? props.expense.title : '';
    let title = props.expense ? props.expense.price : 0;

    this.state = { title, price } // no default set here anymore, now it is set above so it can be used for creating AND updating an expense item

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
    this.props.handleSubmit(this.state);
  }

  render() {
    return(
      <form className='expense-form'
        onSubmit={this.handleSubmit}
        // value and onChange are required for EVERY input
        <input name='title' type='text' value={this.state.title} onChange={this.handleChange} />
        <input name='price' type='text' value={this.state.price} onChange={this.handleChange} />

        <button type='submit'> {this.props.submitTitle} </button>
      </form>
    )
  }
}

export default ExpenseForm;
