/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  GET_ADMIN,
  isLogged,
  loginError,
  loggedOut,
  isAdmin,
} from 'src/actions/loginForm';
import { enableLoading } from 'src/actions/profile';

import { serverIp } from 'src/selectors/serverInfo';

const loginForm = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { loginForm: { email, password } } = store.getState();
      axios.post(`${serverIp}/v1/signin`, { email, password }, { withCredentials: true })
        .then((res) => {
          if (res.data.state === true) {
            console.log('login', res);
            store.dispatch(isLogged());
            // Authorize fetching new profile data at next profile component rendering
            store.dispatch(enableLoading());
          }
          else {
            console.log(res.data.message);
          }
        })
        .catch((error) => {
          store.dispatch(loginError('Mauvaise adresse mail / Mot de passe'));
          console.error(error);
        });
      break;
    }
    case LOGOUT: {
      axios.delete(`${serverIp}/v1/signout`, { withCredentials: true })
        .then((res) => {
          store.dispatch(loggedOut());
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case GET_ADMIN: {
      axios.get(`${serverIp}/v1/users`, { withCredentials: true })
        .then((res) => {
          if (res.data.state === false) {
            console.log('not admin');
          }
          else {
            store.dispatch(isAdmin());
          }
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default loginForm;
