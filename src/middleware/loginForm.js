/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  isLogged,
  loginError,
  loggedOut,
} from 'src/actions/loginForm';
import { enableLoading } from 'src/actions/profile';

const loginForm = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { loginForm: { email, password } } = store.getState();
      //axios.post('http://localhost:5555/v1/signin', { email, password }, { withCredentials: true })
      axios.post('http://3.93.151.102:5555/v1/signin', { email, password }, { withCredentials: true })
        .then((res) => {
          if (res.data.state === true) {
            // console.log('logged');
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
      axios.delete('http://3.93.151.102:5555/v1/signout', { withCredentials: true })
        .then((res) => {
          store.dispatch(loggedOut());
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
