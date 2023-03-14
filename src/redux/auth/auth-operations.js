import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'shared/servises/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch (error) {
      return rejectWithValue('Such user has already existed');
      // return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch (error) {
      return rejectWithValue('Login or password is invalid');
      // return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await api.logout();
    } catch (error) {
      return rejectWithValue('Something went wrong. Please reaload the page.');
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth;
      if (!token || token?.length === 0) {
        return rejectWithValue('');
      }

      const result = await api.refreshUser(token);
      return result;
    } catch (error) {
      return rejectWithValue('Something went wrong. Please reaload the page.');
    }
  }
);
