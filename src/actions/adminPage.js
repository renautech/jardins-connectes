export const GET_INFOS = 'GET_INFOS';
export const SAVE_INFOS = 'SAVE_INFOS';

export const getInfos = (name) => ({
  type: GET_INFOS,
  name,
});

export const saveInfos = (infos) => ({
  type: SAVE_INFOS,
  infos,
});
