/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { serverIp } from 'src/selectors/serverInfo';

import OneOperation from 'src/components/OperationList/OneOperation';

import './style.scss';

const OperationListEmptyBoard = ({
  getEmptyBoardOperations,
  getSelectedBoard,
  operationList,
  operationTypes,
  userBoards,
  deleteOperation,
  isLogged,
}) => {
  useEffect(() => {
    if (isLogged) {
      getEmptyBoardOperations();
    }
  }, []);

  const pictureBuild = `${serverIp}/images/icons8-spade-30.png`;

  const handleOnChange = (event) => {
    getSelectedBoard(event.value);
  };

  const options = operationList.activeFamilies.map((family) => {
    return {
      value: family.id,
      label: family.name,
    };
  });

  const operations = operationList.data.map((operation) => {
    return (
      <div>
        <OneOperation
          key={operation.id}
          operation={operation}
          operationTypes={operationTypes}
          userBoards={userBoards}
          deleteOperation={deleteOperation}
        />
      </div>
    );
  });

  return (
    <div className="operationList">
      <h2 className="operationList__title">Mes dernières actions</h2>
      <img className="operationList__img" src={pictureBuild} alt="vegetable" />
      <div className="operationList__bloc">
        <div>
          {operations}
        </div>
      </div>
    </div>
  );
};

OperationListEmptyBoard.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  getFamilyOperations: PropTypes.func.isRequired,
  getActiveFamilies: PropTypes.func.isRequired,
  getSelectedBoard: PropTypes.func.isRequired,
  operationList: PropTypes.object.isRequired,
  operationTypes: PropTypes.array.isRequired,
  userBoards: PropTypes.array.isRequired,
  deleteOperation: PropTypes.func.isRequired,
};

export default OperationListEmptyBoard;
