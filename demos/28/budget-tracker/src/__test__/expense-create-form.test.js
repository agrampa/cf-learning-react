// demo test to confirm testing environment works
describe('Example true to be true for setup', () => {
  test('true should be true', () => {
    expect(true).toEqual(true);
  });
})

// testing form component
import React from 'react';
import {shallow} from 'enzyme';
import ExpenseCreateForm from '../component/expense-create-form';

describe('Testing ExpenseCreateForm component', () => {
  test('should have correct default state', () => {
    // test is expecgint the handleExpenseCreate method in general but doesn't care that this is not the actual function and doesn't actually do anything
    let wrapper = shallow(<ExpenseCreateForm handleExpenseCreate={() => {}} />)
    expect(wrapper.state('title')).toBe('');
    expect(wrapper.state('price')).toBe(0);
  });

  test('expect submit to invoke handleExpenseCreate', () => {
    let expenseCreate = (expense) => {
      expect(expense.title).toEqual('');
      expect(expense.price).toEqual(0);
    }

    let wrapper = shallow(<ExpenseCreateForm handleExpenseCreate = {expenseCreate} />)
    wrapper.find('form').simulate('submit');
  });
});
