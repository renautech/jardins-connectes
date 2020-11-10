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
  console.log(`OperationTypes : ${operationTypes}`);
  const opTypeList = operationTypes.map( (operationType) => (
    <option value={operationType.name}>{operationType.name}</option>
  ));
  return (
    <div className="operation__type">
      {!loadingOpType && (
      <select onChange={handleOpType} name={name} id={name} value={value}>
          <option value="">Quelle opération effectuer ?</option>
          {opTypeList}
          {/* <option value="Créer une planche">Créer une planche</option>
          <option value="Labourer">Labourer</option>
          <option value="Semer">Semer</option>
          <option value="Arroser">Arroser</option>
          <option value="Fertiliser">Fertiliser</option>
          <option value="Traiter">Traiter</option>
          <option value="Désherber">Désherber</option>
          <option value="Récolter">Récolter</option>
          <option value="Supprimer une planche">Supprimer une planche</option> */}
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
