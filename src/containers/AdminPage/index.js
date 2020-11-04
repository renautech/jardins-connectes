import { connect } from 'react-redux';
import AdminPage from 'src/components/AdminPage';

import {
  getInfos,
  adminReqPost,
  changeFormValues,
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
  changeFormValues: (name, value) => {
    dispatch(changeFormValues(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
