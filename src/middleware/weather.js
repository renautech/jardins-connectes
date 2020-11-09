/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { GET_WEATHER, saveWeather, getWeather, GET_POSTCODE } from 'src/actions/weather';
import { serverIp } from 'src/selectors/serverInfo';

const weather = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_WEATHER:
      axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${action.postcode},fr&units=metric&appid=92b2db89108d9224677d3e99c504c331`)
        .then(function (response) {
          store.dispatch(saveWeather(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case GET_POSTCODE: {
      axios.get(`${serverIp}/v1/users/user`, { withCredentials: true })
        .then(function (res) {
          res.data.postcode !== '' ? 
            store.dispatch(getWeather(res.data.postcode)) :
            // Vesdun, le village au centre de la France
            store.dispatch(getWeather('18360'));
        })
        .catch(function (error) {
          console.log('Erreur dans la récupération du profil : ', error);
        });
    }

    default:
      next(action);
  }
};

export default weather;
