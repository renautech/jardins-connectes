/* eslint-disable no-underscore-dangle */
/* eslint-disable quote-props */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import FormData from 'form-data';
import {
  GET_INFOS,
  ADMIN_REQ_POST,
  ADMIN_VARIETY_POST,
  ADMIN_OPERATION_TYPE_POST,
  ADMIN_FAMILY_PATCH,
  ADMIN_VARIETY_PATCH,
  ADMIN_OPERATION_TYPE_PATCH,
  ADMIN_FAMILY_DELETE,
  ADMIN_VARIETY_DELETE,
  ADMIN_OPERATION_TYPE_DELETE,
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
  console.log('CECI EST MON IMAGE', file);
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
      data.append('image', file);
      axios.post(`${serverIp}/v1/${action.name}`,
        data,
        {
          headers: {
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            'Accept': '*/*',
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
    case ADMIN_VARIETY_POST: {
      const data = new FormData();
      data.append('name', nameInput);
      data.append('family_id', targetId);
      data.append('description', description);
      data.append('image', file);
      axios.post(`${serverIp}/v1/${action.name}`,
        data,
        {
          withCredentials: true,
        })
        .then((res) => {
          console.log('POST VARIETY', res);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case ADMIN_OPERATION_TYPE_POST: {
      const data = new FormData();
      data.append('name', nameInput);
      data.append('description', description);
      data.append('image', file);
      axios.post(`${serverIp}/v1/${action.name}`,
        data,
        {
          withCredentials: true,
        })
        .then((res) => {
          console.log('POST OPERATION', res);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case ADMIN_FAMILY_PATCH: {
      const data = new FormData();
      data.append('name', nameInput);
      data.append('description', description);
      data.append('image', file);
      axios.patch(`${serverIp}/v1/${action.name}/family/${parseInt(targetId, 10)}`,
        data,
        {
          withCredentials: true,
        })
        .then((res) => {
          console.log('PATCH FAMILY', res);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case ADMIN_FAMILY_DELETE: {
      axios.delete(`${serverIp}/v1/${action.name}/family/${parseInt(targetId, 10)}`,
        {
          withCredentials: true,
        })
        .then((res) => {
          console.log('DELETE FAMILY', res);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case ADMIN_VARIETY_DELETE: {
      axios.delete(`${serverIp}/v1/${action.name}/variety/${parseInt(targetId, 10)}`,
        {
          withCredentials: true,
        })
        .then((res) => {
          console.log('DELETE VARIETY', res);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case ADMIN_OPERATION_TYPE_DELETE: {
      axios.delete(`${serverIp}/v1/${action.name}/operation_type/${parseInt(targetId, 10)}`,
        {
          withCredentials: true,
        })
        .then((res) => {
          console.log('DELETE OPERATION TYPE', res);
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
