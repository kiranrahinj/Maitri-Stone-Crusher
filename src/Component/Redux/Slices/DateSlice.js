import { createSlice } from "@reduxjs/toolkit";

// Function to get the first and last date of the current month
const getStartOfMonth = () => {
  const today = new Date();
  return new Date(today.getFullYear(), 1, 1); // First day of current month
};

const getEndOfMonth = () => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), 0); // Last day of current month
};

const initialState = {
  startOfMonth: getStartOfMonth(),
  endOfMonth: getEndOfMonth(),
};

const DateSlice = createSlice({
  name: 'date',
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
