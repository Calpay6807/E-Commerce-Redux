import {ActionTypes} from "../contants/actionTyps"

export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProdutc = (product) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
      
    }
}