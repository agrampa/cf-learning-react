import React from 'react';

import ExpenseForm from '../expense-form';

class ExpenseList extends React.Component {
  render() {
    return (
      <div className='expense-list'>
        <ul>
        {this.props.expenses.map((item, i) => {
          <li key={i}>
          <button onClick={() => this.props.expenseRemove(item)}> Delete </button>
          <p>title: {item.title}</p>
          <p>price: {item.price}</p>

          // no need to make an entirely new form
          <ExpenseForm
            expense={item}
            submitTitle='update expense'
            handleSubmit={(expense) => {
              expense.id = item.id;
              this.props.expenseUpdate(expense);
            }} />
          </li>
        })}
        </ul>
      </div
    )
  }
}

export default ExpenseList;
