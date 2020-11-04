export const GET_INFOS = 'GET_INFOS';
export const SAVE_INFOS = 'SAVE_INFOS';
export const ADMIN_REQ_POST = 'ADMIN_REQ_POST';
export const CHANGE_FORM_VALUES = 'CHANGE_FORM_VALUES';

export const getInfos = (name) => ({
  type: GET_INFOS,
  name,
});

export const saveInfos = (infos) => ({
  type: SAVE_INFOS,
  infos,
});

export const adminReqPost = (name) => ({
  type: ADMIN_REQ_POST,
  name,
});

export const changeFormValues = (name, value) => ({
  type: CHANGE_FORM_VALUES,
  name,
  value,
});
