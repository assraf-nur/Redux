const {createStore, combineReducers} = require('redux');

const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEMS = 'ADD_CART_ITEMS';
const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS';
const RESET_CART_ITEMS = 'RESET_CART_ITEMS';

const initialState = {
    cartItems: ['sugar', 'nuts', 'dates'],
    numberOfCartItems: 3,
}

const getCartItems = () => {
    return {
        type: GET_CART_ITEMS,
    }
}

const addCartItems = (product) => {
    return {
        type: ADD_CART_ITEMS,
        payload: product,
    }
}

const removeCartItems = (product) => {
    return {
        type: REMOVE_CART_ITEMS,
        payload: product,
    }
}


const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CART_ITEMS:
            return {
                ...state,
            }
        case ADD_CART_ITEMS:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                numberOfCartItems: state.numberOfCartItems + 1,
            }
        case REMOVE_CART_ITEMS:
            return {
                ...state,
                cartItems: state.cartItems.filter(product => product !== action.payload),
                numberOfCartItems: state.numberOfCartItems - 1,
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cartR: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log('subscribe', store.getState());
})

store.dispatch(getCartItems());
store.dispatch(addCartItems('milk'));
store.dispatch(removeCartItems('sugar'));
store.dispatch(addCartItems('nuts'));
store.dispatch(addCartItems('dates'));