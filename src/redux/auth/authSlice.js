import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './authOperations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isRefreshing = false;
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
        state.user = action.payload.user.email;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
        state.token = action.payload.token;
        state.user = action.payload.user.email;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
        state.user = action.payload.email;
      })
      .addCase(refreshUser.rejected, () => {
        return initialState;
      });
  },
});

export const authReducer = authSlice.reducer;
