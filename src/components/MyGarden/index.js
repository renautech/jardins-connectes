/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Zoom } from 'react-toastify';
import Loader from 'src/components/Loader';
import Family from './Family';
import EmptyBoard from './EmptyBoard';

import './style.scss';
import { setEmptyBoardId } from '../../actions/operationList';

const MyGarden = ({
  getUserFamilies,
  getUserEmptyBoards,
  getOperationTypes,
  getUserBoards,
  getAdmin,
  userFamilies,
  userEmptyBoards,
  isLogged,
  loading,
  setOperationListId,
  setEmptyBoard,
  enableFlagEmptyBoard,
  disableFlagEmptyBoard,
}) => {
  useEffect(() => {
    if (sessionStorage.getItem("login")) {
      getAdmin();
      getUserBoards();
      getUserFamilies();
      getUserEmptyBoards();
      getOperationTypes();
    }
  }, []);

  const handleOnClickFamily = (family) => {
    setOperationListId(family);
    disableFlagEmptyBoard();
  };

  const handleOnClickEmptyBoard = (board) => {
    setEmptyBoard(board);
    enableFlagEmptyBoard();
  };  

  const Families = userFamilies.map((family) => {
    return (
      <Family
        key={family.name}
        type={family.name}
        handleOnClick={handleOnClickFamily}
        family={family}
        picture={family.picture}
      />
    );
  });

  const EmptyBoards = userEmptyBoards.map((emptyBoard) => {
    return (
      <EmptyBoard
        key={emptyBoard.id}
        name={emptyBoard.name}
        board={emptyBoard}
        handleOnClickEmptyBoard={handleOnClickEmptyBoard}
      />
    )
  })

  return (
    <div className="myGarden">
      <h2 className="myGarden__title">Mon Jardin</h2>
      {!loading && (
        <div className="myGarden__content">
          {Families}
          {EmptyBoards}
        </div>
      )}
      {loading && (
        <Loader />
      )}
      <ToastContainer
        transition={Zoom}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

MyGarden.propTypes = {
  getAdmin: PropTypes.func.isRequired,
  getUserFamilies: PropTypes.func.isRequired,
  getUserEmptyBoards: PropTypes.func.isRequired,
  getOperationTypes: PropTypes.func.isRequired,
  getUserBoards: PropTypes.func.isRequired,
  setOperationListId: PropTypes.func.isRequired,
  userFamilies: PropTypes.array.isRequired,
  userEmptyBoards: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyGarden;
