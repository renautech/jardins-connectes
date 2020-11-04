import {
  SAVE_INFOS,
  CHANGE_FORM_VALUES,
  RESET_FORM_VALUES,
} from 'src/actions/adminPage';

export const initialState = {
  infos: [],
  nameInput: '',
  description: '',
  targetId: '',
  file: '',
};

const adminPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_INFOS:
      return {
        ...state,
        infos: action.infos,
      };
    case CHANGE_FORM_VALUES:
      return {
        ...state,
        [action.name]: action.value,
      };
    case RESET_FORM_VALUES:
      return {
        ...state,
        nameInput: '',
        description: '',
        targetId: '',
        file: '',
      };
    default:
      return state;
  }
};

export default adminPage;
