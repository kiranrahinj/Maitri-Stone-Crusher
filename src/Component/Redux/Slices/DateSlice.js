import { createSlice } from "@reduxjs/toolkit";

// Initialize state with dynamic values
const initialState = {
  startOfMonth: "2024-01-01", // Example hardcoded date
  endOfMonth: "2040-12-31",  // Example hardcoded date
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
