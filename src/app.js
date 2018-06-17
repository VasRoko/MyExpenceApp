import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExepnses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill'}));
store.dispatch(setTextFilter('water'));

console.log(store.getState());

const state = store.getState();
const visisbleExpenses = getVisibleExepnses(state.expenses, state.filters);
console.log(visisbleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
