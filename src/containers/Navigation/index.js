import { connect } from 'react-redux';
import Navigation from 'src/components/Navigation';

const mapStateToProps = (state) => ({
  isLogged: state.jardinConnectes.isLogged,
  isAdmin: state.loginForm.isAdmin,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
