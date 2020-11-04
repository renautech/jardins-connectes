export const GET_INFOS = 'GET_INFOS';
export const SAVE_INFOS = 'SAVE_INFOS';
export const ADMIN_REQ_POST = 'ADMIN_REQ_POST';
export const ADMIN_VARIETY_POST = 'ADMIN_VARIETY_POST';
export const ADMIN_OPERATION_TYPE_POST = 'ADMIN_OPERATION_TYPE_POST';
export const CHANGE_FORM_VALUES = 'CHANGE_FORM_VALUES';
export const RESET_FORM_VALUES = 'RESET_FORM_VALUES';
export const ADMIN_FAMILY_DELETE = 'ADMIN_FAMILY_DELETE';
export const ADMIN_VARIETY_DELETE = 'ADMIN_VARIETY_DELETE';
export const ADMIN_OPERATION_TYPE_DELETE = 'ADMIN_OPERATION_TYPE_DELETE';
export const ADMIN_FAMILY_PATCH = 'ADMIN_FAMILY_PATCH';
export const ADMIN_VARIETY_PATCH = 'ADMIN_VARIETY_PATCH';
export const ADMIN_OPERATION_TYPE_PATCH = 'ADMIN_OPERATION_TYPE_PATCH';

export const adminOperationTypePatch = (name) => ({
  type: ADMIN_OPERATION_TYPE_PATCH,
  name,
});

export const adminVarietyPatch = (name) => ({
  type: ADMIN_VARIETY_PATCH,
  name,
});

export const adminFamilyPatch = (name) => ({
  type: ADMIN_FAMILY_PATCH,
  name,
});

export const adminOperationTypeDelete = (name) => ({
  type: ADMIN_OPERATION_TYPE_DELETE,
  name,
});

export const adminVarietyDelete = (name) => ({
  type: ADMIN_VARIETY_DELETE,
  name,
});

export const adminOperationTypePost = (name) => ({
  type: ADMIN_OPERATION_TYPE_POST,
  name,
});

export const resetFormValues = () => ({
  type: RESET_FORM_VALUES,
});

export const adminVarietyPost = (name) => ({
  type: ADMIN_VARIETY_POST,
  name,
});

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

export const adminFamilyDelete = (name) => ({
  type: ADMIN_FAMILY_DELETE,
  name,
});

export const changeFormValues = (name, value) => ({
  type: CHANGE_FORM_VALUES,
  name,
  value,
});
