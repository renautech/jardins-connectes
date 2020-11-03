import { connect } from 'react-redux';
import AdminPage from 'src/components/AdminPage';

import {
  getInfos,
} from 'src/actions/adminPage';

const mapStateToProps = (state) => ({
  adminStore: state.adminPage,
});

const mapDispatchToProps = (dispatch) => ({
  getInfos: (name) => {
    dispatch(getInfos(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
