export const selectContacts = state => state.phonebook.contacts;
export const selectFilter = state => state.filter.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
