import CartActionTypes from "./action-types"

const initialState = {
    products: [],
    totalPrice: 0,

}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT: 
        return {...initialState, products: [...initialState.products, action.paylod]}

        default:
           return state
    }
}

export default cartReducer