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
  let pictureBuild;
  if(picture=='') {
    pictureBuild = `${serverIp}/images/icons8-group-of-vegetables-96.png`;
  } else {
    pictureBuild = `${serverIp}${picture}`;
  }
  return (
    <div className="myGarden__element myGarden__element--family">
      <NavLink onClick={() => handleOnClick(family)} className="myGarden__navlink" to="/liste-operations">
        <img className="myGarden__element--image" src={pictureBuild} alt="famille de légume" />
        <p className="myGarden__element--text">{type}</p>
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
