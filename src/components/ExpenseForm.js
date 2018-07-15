import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class Expense extends React.Component {
    
    state = {
        description: '',
        notes:  '',
        amount:  '',
        createdAt: moment(),
        calfocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;

        this.setState(() => ({ description }))
    };

    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({ notes }));

    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calfocused: focused }));
    };

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calfocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea
                        placeholder="Notes ( Optional )"
                        value={this.state.notes}
                        onChange={this.onNotesChange}
                    >
                        
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}