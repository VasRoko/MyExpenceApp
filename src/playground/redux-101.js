import { createStore } from 'redux';

// const add = ({a, b}, c) => {
//     return a + b + c;
// } 
// console.log(add({a: 1, b: 12}, 100));

const incrementCount = ({ incremenBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incremenBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
    
});

// Reducers

// Below is not a pure function as it has variable outsite of the function
// let a = 10;

// const add = (b) => {
//     return a + b;
// };


const countReducer = (state = { count: 0 }, action) => {

    if(action.type) 
    {
        switch (action.type)
        {
            case 'INCREMENT':
                return {
                    count: state.count + action.incremenBy
                };
            case 'DECREMENT':
                return {
                    count: state.count - action.decrementBy
                };
            case 'SET': 
                return {
                    count: action.count
                }
            case 'RESET':
                return {
                    count: 0
                };
            default: 
                return state;                
        }
    }
};

const store = createStore(countReducer());

const unsubscibe = store.subscribe(() =>{
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incremenBy: 5
// });

store.dispatch(incrementCount({ incremenBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch( decrementCount({ decremenBy: 10 }));

store.dispatch( setCount( { count: 101 }));





