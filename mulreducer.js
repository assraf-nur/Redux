const {createStore} = require('redux');

const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';
// product reducer
const initialProductState = {
    products: ['sugar', 'nuts', 'dates'],
    numberOfProducts: 3,
}

// action
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}

const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product,
    }
}

// product reducer
const productReducer = (state = initialProductState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
            }
        case ADD_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            }
        default:
            return state;
    }
}

// store - getState(), dispatch(), subscribe()

const store = createStore(productReducer);
store.subscribe(() => {
    console.log('subscribe', store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts('milk'));
store.dispatch(addProducts('butter'));
store.dispatch(addProducts('eggs'));
store.dispatch(addProducts('sugar'));
store.dispatch(addProducts('nuts'));

// cart reducer