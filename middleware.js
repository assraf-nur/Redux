const {createStore} = require ('redux');

const GET_PRODUCT = 'GET_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const initialState = {
    products: ['sugar', 'nuts', 'dates'],
    numberOfProducts: 3,
}

const getProduct = () => {
    return {
        type: GET_PRODUCT,
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}

const removeProduct = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product,
    }
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCT:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product !== action.payload),
                numberOfProducts: state.numberOfProducts - 1,
            }
        default:
            return state;
    }
}

const store = createStore(productReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProduct());
store.dispatch(addProduct('milk'));
store.dispatch(removeProduct('sugar'));
store.dispatch(addProduct('nuts'));

