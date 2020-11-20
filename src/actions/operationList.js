export const SET_OPERATIONLIST_ID = 'SET_OPERATIONLIST_ID';
export const GET_FAMILY_OPERATIONS = 'GET_FAMILY_OPERATIONS';
export const GET_ACTIVE_FAMILIES = 'GET_ACTIVE_FAMILIES';
export const GET_SELECTED_BOARD = 'GET_SELECTED_BOARD';
export const SAVE_OPERATIONS = 'SAVE_OPERATIONS';
export const SAVE_FAMILY_OPERATIONS = 'SAVE_FAMILY_OPERATIONS';
export const SAVE_ACTIVE_FAMILIES = 'SAVE_ACTIVE_FAMILIES';
export const SAVE_SELECTED_BOARD = 'SAVE_SELECTED_BOARD';
export const DELETE_OPERATION = 'DELETE_OPERATION';
export const GET_EMPTY_BOARD_OPERATIONS = 'GET_EMPTY_BOARD_OPERATIONS';
export const SET_EMPTY_BOARD = 'SET_EMPTY_BOARD';


export const setEmptyBoard = (board) => ({
  type: SET_EMPTY_BOARD,
  board,
});

export const getEmptyBoardOperations = () => ({
  type: GET_EMPTY_BOARD_OPERATIONS,
});

export const getFamilyOperations = () => ({
  type: GET_FAMILY_OPERATIONS,
});

export const getActiveFamilies = () => ({
  type: GET_ACTIVE_FAMILIES,
});

export const getSelectedBoard = (id) => ({
  type: GET_SELECTED_BOARD,
  id,
});

export const setOperationListId = (infos) => ({
  type: SET_OPERATIONLIST_ID,
  infos,
});

export const saveOperations = (operations) => ({
  type: SAVE_OPERATIONS,
  operations,
});

export const saveActiveFamilies = (families) => ({
  type: SAVE_ACTIVE_FAMILIES,
  families,
});

export const saveSelectedBoard = (boards) => ({
  type: SAVE_SELECTED_BOARD,
  boards,
});

export const deleteOperation = (id) => ({
  type: DELETE_OPERATION,
  id,
});

export const saveFamilyOperations = (operations) => ({
  type: SAVE_FAMILY_OPERATIONS,
  operations,
});

