/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  GET_INFOS,
  saveInfos,
} from 'src/actions/adminPage';

import { serverIp } from 'src/selectors/serverInfo';

const loginForm = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_INFOS: {
      axios.get(`${serverIp}/${action.name}`, { withCredentials: true })
        .then((res) => {
          store.dispatch(saveInfos(res.data));
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
