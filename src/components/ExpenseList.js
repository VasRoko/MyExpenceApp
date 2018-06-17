import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense LIst</h1>
        {props.expenses.length}
        {props.filters.text}

    </div>
);

const maStateToProps = (state) => {
    return {
        expenses: state.expenses,  
        filters: state.filters
    };
};

export default connect(maStateToProps)(ExpenseList);
