import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { logout } from 'src/actions/loginForm';
import { loggedOut } from 'src/actions/jardinConnectes';

const mapStateToProps = (state) => ({
  isLogged: state.jardinConnectes.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
    dispatch(loggedOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
