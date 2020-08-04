import productTypes from './products.types';

const initialState = {
    listProducts: [],
    total: 0,
    isLoading: true
};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case productTypes.SET_PRODUCTS:
            return {
                ...state,
                listProducts: action.payload
            };
        case productTypes.SET_PRODUCT_TOTAL:
            return {
                ...state,
                total: action.payload
            };
        case productTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default productReducer;