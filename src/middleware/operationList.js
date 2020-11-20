/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  GET_FAMILY_OPERATIONS,
  GET_EMPTY_BOARD_OPERATIONS,
  DELETE_OPERATION,
  GET_ACTIVE_FAMILIES,
  GET_SELECTED_BOARD,
  getFamilyOperations,
  saveOperations,
  saveActiveFamilies,
  saveSelectedBoard,
} from 'src/actions/operationList';

import { serverIp } from 'src/selectors/serverInfo';

const operationList = (store) => (next) => (action) => {
  const {
    operationList: {
      familyInfo,
      emptyBoard,
    },
  } = store.getState();

  switch (action.type) {
    case GET_FAMILY_OPERATIONS: {
      axios.get(`${serverIp}/v1/operations/families/family/${parseInt(familyInfo.family_id, 10)}/users/user`, { withCredentials: true })
        .then(function (res) {
            store.dispatch(saveOperations(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    }
    case GET_EMPTY_BOARD_OPERATIONS: {
      axios.get(`${serverIp}/v1/operations/boards/board/${parseInt(emptyBoard.id)}`, { withCredentials: true })
        .then(function (res) {
          console.log('BOARD OPERATIONS', res);
          store.dispatch(saveOperations(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    }
    case GET_ACTIVE_FAMILIES: {
      axios.get(`${serverIp}/v1/boards/families/family/${parseInt(familyInfo.family_id, 10)}/users/user`, { withCredentials: true })
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
