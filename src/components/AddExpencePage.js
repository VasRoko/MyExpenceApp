import React from 'react';
import ExpenseFrom from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpencePage = (props) => (
    <div>
        <h1> Add Expense</h1>
        <ExpenseFrom 
            onSubmit={(expense) => {
                // console.log(expense);
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpencePage);