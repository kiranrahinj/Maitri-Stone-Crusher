// features/order/orderSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from "../../Axios/Api"

// Async thunk for fetching all orders
export const fetchExpense = createAsyncThunk('fetchExpense', async () => {
    console.log("fetchExpense");
    
    const response = await api.get('/user/expsense/getAllExpense');  // Replace with your API endpoint
    return response.data;  // This will be the payload in the fulfilled case
});

// Initial state for orders
const initialState = {
    expense: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

// Create the orders slice
const ExpenseSLice = createSlice({
    name: 'expense',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        console.log("Expense Slice");

        builder
            .addCase(fetchExpense.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchExpense.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.expense = action.payload; // Store the fetched orders
            })
            .addCase(fetchExpense.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Export the reducer to be added to the store
export default ExpenseSLice.reducer;
