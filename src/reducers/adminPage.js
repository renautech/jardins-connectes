import {
  SAVE_INFOS,
} from 'src/actions/adminPage';

export const initialState = {
  infos: [],
};

const adminPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_INFOS:
      return {
        ...state,
        infos: action.infos,
      };
    default:
      return state;
  }
};

export default adminPage;
