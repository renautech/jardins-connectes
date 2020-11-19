/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';


const EmptyBoard = ({ name, board, handleOnClickEmptyBoard }) => {
  return (
    <div className="myGarden__element myGarden__element--emptyboard">
      <NavLink onClick={() => handleOnClickEmptyBoard(board)} className="myGarden__navlink" to="/liste-operations">
        <img className="myGarden__element--image" src="https://static.vecteezy.com/system/resources/thumbnails/000/349/304/small/Construction__28122_29.jpg" alt="famille de légume" />
        <p className="myGarden__element--text">{name}</p> 
      </NavLink>
    </div>
  );
};

EmptyBoard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EmptyBoard;
