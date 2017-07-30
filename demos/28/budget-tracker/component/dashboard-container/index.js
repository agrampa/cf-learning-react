import React from 'react';
import uuid from 'uuid';

// state is only in the context of what this is displaying
class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)

    this.expenseCreate = this.expenseCreate.bind(this);
  }

  expenseCreate(expense) {
    expense.id = uuid.v1();
    this.props.app.setState(state => ({ // use parens and curlys to return an object
      return {
        expenses: [...state.expenses, expense] // spread out the existing expenses, add the expense that was passed in into this array of expenses
      }})// use parens and curlys to return an object
    )
  }

  render() {
    return (
      <div>
        <ExpenseCreateForm handleExpenseCreate={this.expenseCreate} />
        // <p>Hello from the dashboard</p>
      </div>
    )
  }
}

export default DashboardContainer;

// changes here can affect App via getApp() where <DashboardContainer /> is included within App's JSX
