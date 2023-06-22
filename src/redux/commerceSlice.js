import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
}

export const commerceSlice = createSlice({
    name: "commerce",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter((item) => item.id !== action.payload.id);

        },
        resetCart: (state, action) => {
            state.productData = [];
        },
        incrementQuantity: (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity -= 1;
            }
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state, action) => {
            state.userInfo = null;
        }
    }
})

export const {
    addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity, addUser, removeUser
} = commerceSlice.actions;
export default commerceSlice.reducer;
