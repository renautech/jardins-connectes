export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGGED_OUT = 'LOGGED_OUT';
export const GET_ADMIN = 'GET_ADMIN';
export const IS_ADMIN = 'IS_ADMIN';

export const getAdmin = () => ({
  type: GET_ADMIN,
});

export const isAdmin = () => ({
  type: IS_ADMIN,
});

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password,
});

export const login = () => ({
  type: LOGIN,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loggedOut = () => ({
  type: LOGGED_OUT,
});
