import { connect } from 'react-redux';
import JardinConnectes from 'src/components/JardinConnectes';

const mapStateToProps = (state) => ({
  isLogged: state.loginForm.isLogged,
  isAdmin: state.loginForm.isAdmin,
  isSigned: state.signupForm.isSigned,
  profileEdition: state.profile.profileEdition,
  flagEmptyBoard: state.myGarden.flagEmptyBoard,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JardinConnectes);
