import { connect } from 'react-redux';
import JardinConnectes from 'src/components/JardinConnectes';
import { logged } from 'src/actions/jardinConnectes';

const mapStateToProps = (state) => ({
  isAdmin: state.loginForm.isAdmin,
  isSigned: state.signupForm.isSigned,
  profileEdition: state.profile.profileEdition,
  flagEmptyBoard: state.myGarden.flagEmptyBoard,
  isLogged: state.jardinConnectes.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  logged: () => {
    dispatch(logged());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(JardinConnectes);
