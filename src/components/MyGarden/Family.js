/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { serverIp } from 'src/selectors/serverInfo';

import './style.scss';

const Family = ({
  type,
  picture,
  family,
  handleOnClick,
}) => {
  const pictureBuild = `${serverIp}${picture}`;
  return (
    <div className="mygarden__family">
      <NavLink onClick={() => handleOnClick(family)} className="mygarden__navlink" to="/liste-operations">
        <img className="mygarden__family--image" src={pictureBuild} alt="famille de légume" />
        <p className="mygarden__family--text">{type}</p>
      </NavLink>
    </div>
  );
};

Family.propTypes = {
  type: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  family: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Family;
