import { createSlice } from '@reduxjs/toolkit';
import { login, refreshUser, register } from './authOperations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
        state.token = action.payload.token;
        state.user = action.payload.name;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
        state.token = action.payload.token;
        state.user = action.payload.name;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
        state.user = action.payload.name;
      });
  },
});

export const authReducer = authSlice.reducer;
