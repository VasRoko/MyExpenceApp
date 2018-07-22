import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';


const ExpenseListItem = ( {id, dispatch,  description, amount, createdAt} ) => {
    return (
        <div>
            <Link to={`edit/${id}`}>
                <h3>{description} </h3>
            </Link> 
            <p> £ { amount } </p>
            <button onClick={(id) => {
                dispatch(removeExpense({ id }));
            }}>Remove</button>
        </div>
    )
};

export default connect()(ExpenseListItem);