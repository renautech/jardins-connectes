import {
  SAVE_USER_FAMILIES,
  SAVE_USER_EMPTY_BOARDS,
  SAVE_OPERATION_TYPES,
  LOADING_USER_FAMILIES,
  ENABLE_FLAG_EMPTY_BOARD,
  DISABLE_FLAG_EMPTY_BOARD,
} from 'src/actions/myGarden';

export const initialState = {
  userFamilies: [],
  userEmptyBoards: [],
  operationTypes: [],
  loading: true,
  loadingOpType: true,
  flagEmptyBoard: true,
};

const myGarden = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_FAMILIES:
      return {
        ...state,
        userFamilies: action.families,
        loading: false,
      };
    case SAVE_USER_EMPTY_BOARDS:
      return {
        ...state,
        userEmptyBoards: action.emptyBoards,
        loading: false,
      };
    case SAVE_OPERATION_TYPES:
      return {
        ...state,
        operationTypes: action.operationTypes,
        loadingOpType: false,
      };
    case LOADING_USER_FAMILIES:
      return {
        ...state,
        loading: true,
      };
    case ENABLE_FLAG_EMPTY_BOARD:
      return {
        ...state,
        flagEmptyBoard: true,
      };
    case DISABLE_FLAG_EMPTY_BOARD:
      return {
        ...state,
        flagEmptyBoard: false,
      };

    default:
      return state;
  }
};

export default myGarden;
