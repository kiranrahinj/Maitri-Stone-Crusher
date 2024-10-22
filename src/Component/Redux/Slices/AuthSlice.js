// src/features/auth/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null, // Check localStorage for existing token
  isLoggedIn: !!localStorage.getItem('token'),  // Boolean based on token
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload; // Set token on login
      state.isLoggedIn = true;      // Mark user as logged in
      localStorage.setItem('token', action.payload); // Save token in localStorage
    },
    logout: (state) => {
      state.token = null;          // Clear token
      state.isLoggedIn = false;    // Mark user as logged out
      localStorage.removeItem('token'); // Remove token from localStorage
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
