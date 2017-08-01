import React from 'react';
import Navbar from '../navbar';
import ExpenseForm from '../expense-form';
import ExpenseList from '../expense-list';
import Modal from '../modal';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showErrors: true,
    }

    this.expenseCreate = this.expenseCreate.bind(this);
    this.expenseRemove = this.expenseRemove.bind(this);
    this.expenseUpdate = this.expenseUpdate.bind(this);
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

  expenseUpdate(expense) {
    let {app} = this.props;
    app.setState(prevState => {
      expenses: prevState.expenses.map((item) => {
        return item.id === expense.id ? expense : item;
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
        <ExpenseForm handleSubmit={this.expenseCreate} submitTitle='add expense'/>

        // can also say expenses={app.state.expenses} and get rid of expeneses variable above
        <ExpenseList
          expenseRemove={this.expenseRemove}
          expenseUpdate={this.expenseUpdate}
          expenses={expenses} />

        <p> Dashboard </p>

        {renderIf(remainingBudget < 0 && this.state.showErrors,
          <Modal close={() => this.setState({showErrors: false})}>
          <p>You are over budget!</p>
          <p>Current Balance: {remainingBudget}</p>
          </Modal>
        )}

      </div>
    )
  }
}

export default DashboardContainer;
