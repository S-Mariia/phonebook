import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  isAddingLoading: false,
  isDeletingLoading: false,
  error: null,
};

const extraActions = [fetchContacts, deleteContact, addContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchContactsFulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const addContactFulfilledReducer = (state, { payload }) => {
  state.isAddingLoading = false;
  state.error = null;
  state.items.push(payload);
};

const deleteContactFulfilledReducer = (state, { payload }) => {
  state.isDeletingLoading = false;
  state.error = null;
  state.items = state.items.filter(({ _id }) => _id !== payload);
};

const fetchContactsPendingReducer = state => {
  state.isLoading = true;
};

const addContactPendingReducer = state => {
  state.isAddingLoading = true;
};

const deleteContactPendingReducer = state => {
  state.isDeletingLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.isAddingLoading = false;
  state.isDeletingLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(fetchContacts.pending, fetchContactsPendingReducer)
      .addCase(deleteContact.pending, deleteContactPendingReducer)
      .addCase(addContact.pending, addContactPendingReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer);
  },
});

export default contactsSlice.reducer;
