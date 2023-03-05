export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectIsAddingLoading = state => state.contacts.isAddingLoading;

export const selectIsDeletingLoading = state =>
  state.contacts.isDeletingLoading;

export const selectWithError = state => state.contacts.error;
