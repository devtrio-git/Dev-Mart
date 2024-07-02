import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductIntoCart: (state, action) => {
            const productExits = state.products.find(item => item.product_id === action.payload.id);
            if (productExits) {
                productExits.quantity++;
            } else {
                state.products.push({
                    product_id: action.payload.id,
                    product: action.payload,
                    quantity: 1,
                });
            }
        },
        decreaseProductQuantity: (state, action) => {
            const productExits = state.products.find(item => item.product_id === action.payload.id);
            if (productExits) {
                if (productExits.quantity > 1) {
                    productExits.quantity--;
                } else {
                    state.products = state.products.filter(item => item.product_id !== action.payload.id);
                }
            }
        },
        removeProductFromCart: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload.id);
        },
        removeAllProducts: (state) => {
            state.products = [];
        },

    },
});

export const { addProductIntoCart, decreaseProductQuantity, removeProductFromCart, removeAllProducts } = cartSlice.actions;
export default cartSlice.reducer;
