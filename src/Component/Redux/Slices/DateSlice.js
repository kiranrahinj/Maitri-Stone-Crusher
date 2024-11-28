import { createSlice } from "@reduxjs/toolkit";

// Function to get the first and last date of the current month
const getStartOfMonth = () => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), 1); // First day of current month
};

const getEndOfMonth = () => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth() + 1, 0); // Last day of current month
};

// Initialize state with dynamic values
const initialState = {
  startOfMonth: getStartOfMonth().toISOString().split("T")[0], // Format as YYYY-MM-DD
  endOfMonth: getEndOfMonth().toISOString().split("T")[0],     // Format as YYYY-MM-DD
};

const DateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.startOfMonth = action.payload.startOfMonth;
      state.endOfMonth = action.payload.endOfMonth;
    },
  },
});

export const { setDate } = DateSlice.actions;
export default DateSlice.reducer;
