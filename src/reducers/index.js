import { combineReducers } from 'redux';

import weather from './weather';
import loginForm from './loginForm';
import signupForm from './signupForm';
import myGarden from './myGarden';
import operations from './operations';
import profile from './profile';
import profileEdit from './profileEdit';
import operationList from './operationList';
import adminPage from './adminPage';
import jardinConnectes from './jardinConnectes';

export default combineReducers({
  weather,
  loginForm,
  signupForm,
  operations,
  myGarden,
  profile,
  profileEdit,
  operationList,
  adminPage,
  jardinConnectes,
});
