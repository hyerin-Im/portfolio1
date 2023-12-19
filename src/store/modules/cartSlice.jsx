import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/cartdata';

const initialState = {
    carts: [],
    cartTotal: 0,
    products: productData,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.carts.push(action.payload);
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter((item) => item.id !== action.payload);
        },
        totalCart: (state, action) => {
            state.cartTotal = state.carts.reduce((acc, curr) => acc + curr.price, 0);
        },
        sortCart: (state, action) => {
            if (action.payload !== '') {
                state.products.sort((a, b) => (a[action.payload] > b[action.payload] ? 1 : -1));
            }
        },
        searchCart: (state, action) => {
            state.products = productData.filter((item) =>
                item.description.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        resetCart: (state, action) => {
            state.products = productData;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart, totalCart, sortCart, searchCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
