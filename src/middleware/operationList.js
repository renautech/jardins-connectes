/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  GET_FAMILY_OPERATIONS,
  DELETE_OPERATION,
  GET_ACTIVE_FAMILIES,
  GET_SELECTED_BOARD,
  getFamilyOperations,
  saveFamilyOperations,
  saveActiveFamilies,
  saveSelectedBoard,
} from 'src/actions/operationList';

import { serverIp } from 'src/selectors/serverInfo';

const operationList = (store) => (next) => (action) => {
  const {
    operationList: {
      familyInfo,
    },
  } = store.getState();

  switch (action.type) {
    case GET_FAMILY_OPERATIONS: {
      axios.get(`${serverIp}/v1/operations/families/family/${parseInt(familyInfo.id, 10)}/users/user`, { withCredentials: true })
        .then(function (res) {
          console.log('FAMILY OPERATIONS', res);
          store.dispatch(saveFamilyOperations(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    }
    case GET_ACTIVE_FAMILIES: {
      axios.get(`${serverIp}/v1/boards/families/family/${parseInt(familyInfo.id, 10)}/users/user`, { withCredentials: true })
        .then(function (res) {
          console.log('Active families', res.data);
          store.dispatch(saveActiveFamilies(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    }
    case GET_SELECTED_BOARD: {
      axios.get(`${serverIp}/v1/operations/boards/board/${action.id}`, { withCredentials: true })
        .then(function (res) {
          console.log('Selected Boards operations', res.data);
          store.dispatch(saveFamilyOperations(res.data));
          store.dispatch(saveSelectedBoard(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    }
    case DELETE_OPERATION:
      axios.delete(`${serverIp}/v1/operations/operation/${action.id}/users/user`, { withCredentials: true })
        .then(function (res) {
          console.log('opération supprimée !', res);
          store.dispatch(getFamilyOperations());
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default operationList;
