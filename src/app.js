import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExepnses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Gas Bill', amount: 50 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 125 }));
store.dispatch(addExpense({ description: 'Rent', amount: 425 }));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

const state = store.getState();
const visisbleExpenses = getVisibleExepnses(state.expenses, state.filters);
console.log(visisbleExpenses);

const jsx = ( 
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
