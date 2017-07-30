import React from 'react';
import Navbar from '../navbar';
inport ExpenseCreateForm from '../expense-create-form';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.expenseCreate = this.expenseCreate.bind(this);
  }

  // methods

  // only available here, not available in Navbar unless defined when rendered below
  expenseCreate(expense) {
    expense.id = uuid();

    // immutably add a new expense to the old expenses array on app's state
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.concat([expense]), // can also use spread operator
    }))
  }

  // render
  render() {
    return (
      <div className='dashboard-container'>
        <Navbar />
        // expenseCreate is a prop here -- the second one below in the middle
        <ExpenseCreateForm expenseCreate={this.expenseCreate} />
        <p> Dashboard </p>
      </div>
    )
  }
}

export default DashboardContainer;
