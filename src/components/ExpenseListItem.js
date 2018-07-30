import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ( {id, dispatch,  description, amount, createdAt} ) => {
    return (
        <div>
            <Link to={`edit/${id}`}>
                <h3>{description} </h3>
            </Link> 
            <p> £ { amount } </p>
        </div>
    )
};

export default ExpenseListItem;