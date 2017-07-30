import React from 'react';
import Navbar from '../navbar';
import ExpenseCreateForm from '../expense-create-form';
import ExpenseList from '../expense-list';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.expenseCreate = this.expenseCreate.bind(this);
    this.expenseRemove = this.expenseRemove.bind(this);
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

  expenseRemove(expense) {
    let {app} = this.props;
    app.setState(prevState => {
      expenses: prevState.expenses.filter((item) => {
        return item.id !== expense.id;
      })
    })
  }

  // render
  render() {
    let {app} = this.props;
    let {expenses} = app.state; // app has state and setState properties

    let totalSpent = app.state.expenses.reduce((p, c) => {
      return p + c.price;
    }, 0);

    let remainingBudget = app.state.total - totalSpent;

    return (
      <div className='dashboard-container'>
        <Navbar />
        <p> Total Budget: {app.state.total} </p>
        <p> Total Spent: {totalSpent} </p>
        <p> Remaining Budget: {remainingBudget} </p>
        // expenseCreate is a prop here -- the second one below in the middle
        <ExpenseCreateForm expenseCreate={this.expenseCreate} />
        // can also say expenses={app.state.expenses} and get rid of expeneses variable above
        <ExpenseList
          expenseRemove={this.expenseRemove}
          expenses={expenses} />
        <p> Dashboard </p>
      </div>
    )
  }
}

export default DashboardContainer;
