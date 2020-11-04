import { connect } from 'react-redux';
import AdminPage from 'src/components/AdminPage';

import {
  getInfos,
  adminReqPost,
  adminVarietyPost,
  adminOperationTypePost,
  adminFamilyPatch,
  adminVarietyPatch,
  adminOperationTypePatch,
  adminFamilyDelete,
  adminVarietyDelete,
  adminOperationTypeDelete,
  changeFormValues,
  resetFormValues,
} from 'src/actions/adminPage';

const mapStateToProps = (state) => ({
  adminStore: state.adminPage,
});

const mapDispatchToProps = (dispatch) => ({
  getInfos: (name) => {
    dispatch(getInfos(name));
  },
  adminReqPost: (name) => {
    dispatch(adminReqPost(name));
  },
  adminVarietyPost: (name) => {
    dispatch(adminVarietyPost(name));
  },
  adminOperationTypePost: (name) => {
    dispatch(adminOperationTypePost(name));
  },
  adminFamilyPatch: (name) => {
    dispatch(adminFamilyPatch(name));
  },
  adminVarietyPatch: (name) => {
    dispatch(adminVarietyPatch(name));
  },
  adminOperationTypePatch: (name) => {
    dispatch(adminOperationTypePatch(name));
  },
  adminFamilyDelete: (name) => {
    dispatch(adminFamilyDelete(name));
  },
  adminVarietyDelete: (name) => {
    dispatch(adminVarietyDelete(name));
  },
  adminOperationTypeDelete: (name) => {
    dispatch(adminOperationTypeDelete(name));
  },
  changeFormValues: (name, value) => {
    dispatch(changeFormValues(name, value));
  },
  resetFormValues: () => {
    dispatch(resetFormValues());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
