import * as actionTypes from '../constants/productConstants'

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getItemReducer = (state = { item: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_ITEM_REQUEST:
            return {
                loading: true
            }
        case actionTypes.GET_ITEM_SUCCESS:
            return {
                loading: false,
                item: action.payload
            }
        case actionTypes.GET_ITEM_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_ITEM_RESET:
            return {
                item: {}
            }
        default:
            return state;
    }
}