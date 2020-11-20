/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { serverIp } from 'src/selectors/serverInfo';
import './style.scss';


const EmptyBoard = ({ name, board, handleOnClickEmptyBoard }) => {

  const pictureBuild = `${serverIp}/images/icons8-spade-30.png`;
  return (
    <div className="myGarden__element myGarden__element--emptyboard">
      <NavLink onClick={() => handleOnClickEmptyBoard(board)} className="myGarden__navlink" to="/liste-operations">
        <img className="myGarden__element--image" src={pictureBuild} alt="pelle" />
        <p className="myGarden__element--text">{name}</p> 
      </NavLink>
    </div>
  );
};

EmptyBoard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EmptyBoard;
