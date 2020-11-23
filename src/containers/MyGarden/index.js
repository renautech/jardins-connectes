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

const mapStateToProps = (state) => ({
  userFamilies: state.myGarden.userFamilies,
  userEmptyBoards: state.myGarden.userEmptyBoards,
  loading: state.myGarden.loading,
  isLogged: state.jardinConnectes.isLogged,
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
