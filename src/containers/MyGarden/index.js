import { connect } from 'react-redux';
import MyGarden from 'src/components/MyGarden';

import {
  getUserFamilies,
  getUserEmptyBoards,
  getOperationTypes,
  enableFlagEmptyBoard, 
  disableFlagEmptyBoard
} from 'src/actions/myGarden';

import { getAdmin } from 'src/actions/loginForm';

import { setOperationListId, setEmptyBoard } from 'src/actions/operationList';

import { getUserBoards } from 'src/actions/operations';

const mapStateToProps = (store) => ({
  userFamilies: store.myGarden.userFamilies,
  userEmptyBoards: store.myGarden.userEmptyBoards,
  loading: store.myGarden.loading,
  isLogged: store.loginForm.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getUserFamilies: () => {
    dispatch(getUserFamilies());
  },
  getUserEmptyBoards: () => {
    dispatch(getUserEmptyBoards());
  },
  getOperationTypes: () => {
    dispatch(getOperationTypes());
  },

  setOperationListId: (infos) => {
    dispatch(setOperationListId(infos));
  },
  setEmptyBoard: (board) => {
    dispatch(setEmptyBoard(board));
  },

  getUserBoards: () => {
    dispatch(getUserBoards());
  },

  getAdmin: () => {
    dispatch(getAdmin());
  },

  enableFlagEmptyBoard: () => {
    dispatch(enableFlagEmptyBoard());
  },
  disableFlagEmptyBoard: () => {
    dispatch(disableFlagEmptyBoard());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGarden);
