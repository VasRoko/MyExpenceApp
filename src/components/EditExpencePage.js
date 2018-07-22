import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';


const EditExpencePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    alert('Expense has been updated!');
                    // props.history.push('/');
                    console.log('updated', expense);
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find((expense) => 
            expense.id === props.match.params.id
        )
    };
};

export default connect(mapStateToProps)(EditExpencePage);