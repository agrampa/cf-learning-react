import React from 'react';

class ExpenseList extends React.Component {
  render() {
    return (
      <div className='expense-list'>
        <ul>
        {this.props.expenses.map((item, i) => {
          <li key={i}>
          <p>title: {item.title}</p>
          <p>price: {item.price}</p>
          </li>
        })}
        </ul>
      </div
    )
  }
}

export default ExpenseList;
