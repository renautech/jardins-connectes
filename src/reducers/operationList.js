import {
  SAVE_OPERATIONS,
  SAVE_ACTIVE_FAMILIES,
  SAVE_SELECTED_BOARD,
  SET_OPERATIONLIST_ID,
  SET_EMPTY_BOARD,
} from 'src/actions/operationList';

export const initialState = {
  data: [],
  requestDone: false,
  familyInfo: {},
  activeFamilies: [],
  selectedBoard: [],
  emptyBoard: [],
};

const operationList = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_OPERATIONLIST_ID:
      return {
        ...state,
        familyInfo: action.infos,
      };
    case SET_EMPTY_BOARD:
      return {
        ...state,
        emptyBoard: action.board,
      };
    case SAVE_OPERATIONS:
      return {
        ...state,
        data: action.operations,
        requestDone: true,
      };
    case SAVE_SELECTED_BOARD:
      return {
        ...state,
        selectedBoard: action.boards,
        requestDone: true,
      };
    case SAVE_ACTIVE_FAMILIES:
      return {
        ...state,
        activeFamilies: action.families,
        requestDone: true,
      };
    default:
      return state;
  }
};

export default operationList;
