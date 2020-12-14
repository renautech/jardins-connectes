import { toast } from 'react-toastify';

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  IS_LOGGED,
  LOGIN_ERROR,
  LOGGED_OUT,
  IS_ADMIN,
  MESSAGE
} from 'src/actions/loginForm';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
  loginError: '',
  isAdmin: '',
};

const loginForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case LOGGED_OUT:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: false,
        loginError: '',
        isAdmin: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.error,
      };
    case IS_ADMIN:
      return {
        ...state,
        isAdmin: true,
      };
    case MESSAGE:
      toast.warning(action.message);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default loginForm;
