import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'shared/servises/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      console.log('operation/signup');
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.responce);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      console.log('operation/login');
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.responce);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await api.logout();
      console.log('operation/logout');
    } catch (error) {
      return rejectWithValue(error.responce);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth;
      if (!token || token?.length === 0) {
        return rejectWithValue('No token :(');
      }

      const result = await api.refreshUser(token);
      console.log('operation/refresh');
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.responce);
    }
  }
);
