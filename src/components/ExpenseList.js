import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense LIst</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
        })}
    </div>
);

const maStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters), 
        filters: state.filters
    };
};

export default connect(maStateToProps)(ExpenseList);
