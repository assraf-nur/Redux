const {createStore} = require('redux');

const ADD_PRODUCTS = 'ADD_PRODUCTS';
const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS';
const GET_PRODUCTS = 'GET_PRODUCTS';

const initialState = {
    products: ['sugar', 'nuts', 'dates'],
    numberOfProducts: 3,
}

const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product,
    }
}

const removeProducts = (product) => {
    return {
        type: REMOVE_PRODUCTS,
        payload: product,
    }
}

const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}

// reducer
const productReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            }
        case REMOVE_PRODUCTS:
            return {
                ...state,
                products: state.products.filter(product => product !== action.payload),
                numberOfProducts: state.numberOfProducts - 1,
            }
        case GET_PRODUCTS:
            return {
                ...state,
            }
        default:
            return state;
    }
}
const store = createStore(productReducer);

store.subscribe(() => {
    console.log('subscribe', store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts('milk'));
store.dispatch(removeProducts('sugar'));
store.dispatch(addProducts('butter'));
