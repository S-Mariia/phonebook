import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, refreshUser } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  refreshError: null,
  signupError: null,
  loginError: null,
  logoutError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetSignupError: state => {
      state.signupError = null;
    },
    resetLoginError: state => {
      state.loginError = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.isLoading = true;
        state.signupError = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.signupError = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.loginError = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.loginError = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.logoutError = null;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = {};
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.logoutError = payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.refreshError = null;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.refreshError = payload;
      });
  },
});

export const { resetSignupError, resetLoginError } = authSlice.actions;
export default authSlice.reducer;
