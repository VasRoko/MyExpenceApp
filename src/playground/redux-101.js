import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {

    if(action.type) 
    {
        switch (action.type)
        {
            case 'INCREMENT':
                const incremenBy = typeof action.incremenBy === 'number' ? action.incremenBy : 1;
                return {
                    count: state.count + incremenBy
                };
            case 'DECREMENT':
                const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
                return {
                    count: state.count - decrementBy
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
});

const unsubscibe = store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incremenBy: 5
});

store.dispatch({
    type: 'INCREMENT',
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});


store.dispatch({
    type: 'SET',
    count: 101
});





