import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { logout } from 'src/actions/loginForm';
import { loggedOut } from 'src/actions/jardinConnectes';

const mapStateToProps = (state) => ({
  isLogged: state.jardinConnectes.isLogged,
  checkLogged: state.loginForm.checkLogged,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
    dispatch(loggedOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
