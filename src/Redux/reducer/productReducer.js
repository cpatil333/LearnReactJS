import { ADD_TO_PRODUCT } from "../constants/productContantas"
const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        default:
            return state;
    }
};

//export default productReducer;