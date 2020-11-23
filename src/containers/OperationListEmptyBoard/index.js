import { connect } from 'react-redux';
import OperationListEmptyBoard from 'src/components/OperationListEmptyBoard';

import {
  getFamilyOperations,
  getActiveFamilies,
  getSelectedBoard,
  deleteOperation,
  getEmptyBoardOperations,
} from 'src/actions/operationListEmptyBoard';

const mapStateToProps = (state) => ({
  operationList: state.operationList,
  operationTypes: state.myGarden.operationTypes,
  userBoards: state.operations.userBoards,
  isLogged: state.jardinConnectes.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getEmptyBoardOperations: () => {
    dispatch(getEmptyBoardOperations());
  },
  getFamilyOperations: () => {
    dispatch(getFamilyOperations());
  },
  getActiveFamilies: () => {
    dispatch(getActiveFamilies());
  },
  getSelectedBoard: (id) => {
    dispatch(getSelectedBoard(id));
  },
  deleteOperation: (id) => {
    dispatch(deleteOperation(id));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(OperationListEmptyBoard);
