const {createStore} = require('redux');
// defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// state
const initialCountState = {
    count: 0,
}

const initialUserState = {
    users: [{
        name: 'John',
        age: 30
    }]
}


// action-Object - type, payload
// increment counter 
const incrementCounter = () =>{
    return {
        type: INCREMENT,
    }
}

const decrementCounter = () =>{
    return {
        type: DECREMENT,
    }
}

const addUser = () =>{
    return {
        type: ADD_USER,
        payload: {
            name: 'nur',
        }
    }
}

// create reducer for count

const counterReducer =  (state = initialCountState, action) => {
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
        default:
            return state;
    }
}

// store - getState(), dispatch(), subscribe()
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log('subscribe', store.getState());
})

// dispatch - action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());


// 1. state
// 2. dispatch action
// 3. reducer
// 4. update state


// decrement counter