/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Loader from 'src/components/Loader';

const OperationType = ({
  handleOpType,
  name,
  value,
  operationTypes,
  loadingOpType,
}) => {
  const opTypeList = operationTypes.map( (operationType) => (
    <option value={operationType.name}>{operationType.name}</option>
  ));
  return (
    <div className="operation__type">
      {!loadingOpType && (
      <select onChange={handleOpType} name={name} id={name} value={value}>
          <option value="">Quelle opération effectuer ?</option>
          <option value="Créer une planche">Créer une planche</option>
          {opTypeList}
          <option value="Supprimer une planche">Supprimer une planche</option>
        </select>
      )}
      {loadingOpType && (
        <Loader />
      )}
    </div>
  );
};

OperationType.propTypes = {
  handleOpType: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default OperationType;
