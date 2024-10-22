// features/order/orderSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from "../../Axios/Api"

// Async thunk for fetching all orders
export const fetchOrders = createAsyncThunk('fetchOrders', async () => {
    console.log("fetchorders");
    
    const response = await api.get('/user/order/getAllOrders');  // Replace with your API endpoint
    return response.data;  // This will be the payload in the fulfilled case
});

// Initial state for orders
const initialState = {
    orders: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

// Create the orders slice
const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        console.log("orderSlice");

        builder
            .addCase(fetchOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload; // Store the fetched orders
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Export the reducer to be added to the store
export default orderSlice.reducer;
