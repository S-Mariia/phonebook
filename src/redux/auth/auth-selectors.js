export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user?.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectSignupError = state => state.auth.signupError;
export const selectLoginError = state => state.auth.loginError;
export const selectLogoutError = state => state.auth.logoutError;
export const selectRefreshError = state => state.auth.refreshError;
