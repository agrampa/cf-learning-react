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

  }

  handleSubmit(e) {

  }
}

export default ExpenseCreateForm;
