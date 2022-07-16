// plan state - count: 0
// plan action - increment, decrement, reset
// reducer 
// store
const {createStore} = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const RESET = 'RESET';
const ADD_USER = 'ADD_USER';

// declare state
const initialState = {
    count: 1,
    users: [{name: 'John', age: 30}]
}



// build action
const addUser = (value) => {
    return {
        type: ADD_USER,
    }
}

const incrementAction = () => {
    return {
        type: INCREMENT,
    }
}

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT,
    }
}

const resetAction = () => {
    return {
        type: RESET,
    }
}

// create reducer
const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            }
        default:
            return state;
    }
}


const store = createStore(counterReducer);

store.subscribe(() => {
    console.log('subscribe', store.getState());
});


// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(resetAction());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(15));
