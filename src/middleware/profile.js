/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { GET_PROFILE, loadProfile } from 'src/actions/profile';
import { serverIp } from 'src/selectors/serverInfo';

const profile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILE: {
      if (store.getState().profile.loading) {
        axios.get(`${serverIp}/v1/users/user`, { withCredentials: true })
          .then(function (res) {
            // update state with user profile data
            store.dispatch(loadProfile(res.data));
          })
          .catch(function (error) {
            console.log('Erreur dans la récupération du profil : ', error);
          });
      }

      break;
    }
    default:
      next(action);
  }
};

export default profile;
