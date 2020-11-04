/* eslint-disable no-underscore-dangle */
/* eslint-disable quote-props */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import FormData from 'form-data';
import {
  GET_INFOS,
  ADMIN_REQ_POST,
  saveInfos,
} from 'src/actions/adminPage';

import { serverIp } from 'src/selectors/serverInfo';

const loginForm = (store) => (next) => (action) => {
  const {
    adminPage: {
      nameInput,
      description,
      file,
      targetId,
    },
  } = store.getState();
  switch (action.type) {
    case GET_INFOS: {
      axios.get(`${serverIp}/v1/${action.name}`, { withCredentials: true })
        .then((res) => {
          store.dispatch(saveInfos(res.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case ADMIN_REQ_POST: {
      const data = new FormData();
      data.append('name', nameInput);
      data.append('description', description);
      axios.post(`${serverIp}/v1/${action.name}`,
        {
          data: data,
        },
        {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log('POST FAMILIES', res);
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
