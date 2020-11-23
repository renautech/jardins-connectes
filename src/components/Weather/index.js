/* eslint-disable prefer-arrow-callback */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from 'src/components/Loader';

import './style.scss';

const Weather = ({
  weather,
  loading,
  getPostcode,
}) => {
  useEffect(() => {
    getPostcode();
  }, []);

  return (
    <div className="weather">
      <h2 className="weather__title">Météo</h2>
      {!loading && (
        <>
          <div className="weather__detail">
            <img className="weather__icon" src={weather.icon} alt="" />
            <div>

            <div className="weather__name">{weather.name}</div>
            <div className="weather__temp">{weather.temp}°C</div>
            <div className="weather__name">Humidité {weather.humidity}%</div>
            </div>
          </div>
        </>
      )}
      {loading && (
        <Loader />
      )}
    </div>
  );
};

Weather.propTypes = {
  getPostcode: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Weather;
