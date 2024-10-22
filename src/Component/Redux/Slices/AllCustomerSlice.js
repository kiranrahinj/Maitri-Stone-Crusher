import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from "../../Axios/Api"

// Async thunk for fetching all orders
export const fetchCustomer = createAsyncThunk('fetchCustomer', async () => {
    console.log("fetchCustomer");
    
    const response = await api.get('/user/customer/getAllCustomer');  
    return response.data;  // This will be the payload in the fulfilled case
});

// Initial state for orders
const initialState = {
    customer: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

const AllCustomerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        console.log("customerSlice");

        builder
            .addCase(fetchCustomer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCustomer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.customer = action.payload; // Store the fetched orders
            })
            .addCase(fetchCustomer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Export the reducer to be added to the store
export default AllCustomerSlice.reducer;
