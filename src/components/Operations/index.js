/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

import OperationType from './OperationType';
import Field from './Field';
import CommentField from './CommentField';
import SelectField from './SelectField';
import VarietyField from './VarietyField';
import Confirm from './Confirm';

import './style.scss';

const Operations = ({ data, dataBoard }) => {
  const [operationType, setOpType] = useState('');
  const [operationTarget, setOpTarget] = useState('');
  const [BoardFamily, setBoardFamily] = useState('');
  const [BoardVariety, setBoardVariety] = useState('');
  const [operationQuantity, setOpQtt] = useState('');
  const [operationProduct, setOpProd] = useState('');
  const [operationMaker, setOpMaker] = useState('');
  const [operationComment, setOpComment] = useState('');

  const handleOpType = (event) => {
    console.log(event.target.value);
    setOpType(event.target.value);
  };

  const handleOpTarget = (event) => {
    console.log(event.target.value);
    setOpTarget(event.target.value);
  };

  const handleBoardFamily = (event) => {
    console.log(event.target.value);
    setBoardFamily(event.target.value);
  };

  const handleBoardVariety = (event) => {
    console.log(event.target.value);
    setBoardVariety(event.target.value);
  };

  const handleQttValue = (event) => {
    console.log(event.target.value);
    setOpQtt(event.target.value);
  };

  const handleProductValue = (event) => {
    console.log(event.target.value);
    setOpProd(event.target.value);
  };

  const handleMakerValue = (event) => {
    console.log(event.target.value);
    setOpMaker(event.target.value);
  };

  const handleCommentValue = (event) => {
    console.log(event.target.value);
    setOpComment(event.target.value);
  };

  return (
    <div className="operation">
      <h2 className="operation__title">Opérations</h2>
      <OperationType handleOpType={handleOpType} />
  
      {operationType === 'Créer une planche' && (
        <form action="post">
          <Field onChange={handleOpTarget} placeholder="Nom de votre planche..."/>
          <CommentField onChange={handleCommentValue} placeholder="Plus de détails"/>
          <Confirm />
        </form>
      )}
      {operationType === 'Labourer' && (
        <form action="post">
          <SelectField onChange={handleOpTarget} data={dataBoard} placeholder="Quelle planche labourer ?"/>
          <CommentField onChange={handleCommentValue} placeholder="Plus de détails"/>
          <Confirm />
        </form>
      )}
      {operationType === 'Semer' && (
        <form action="post">
          <SelectField onChange={handleOpTarget} data={dataBoard} placeholder="Sur quelle planche ?"/>
          <SelectField onChange={handleBoardFamily} data={data.family} placeholder="De quelle famille ?"/>
          <VarietyField onChange={handleBoardVariety} data={data.variety} target={BoardFamily} placeholder="De quelle variété ?"/>
          <Confirm />
        </form>
      )}
      {operationType === 'Arroser' && (
        <form action="post">
          <SelectField onChange={handleOpTarget} data={dataBoard} placeholder="Quelle planche arroser ?"/>
          <CommentField onChange={handleCommentValue} placeholder="Plus de détails"/>
          <Confirm />
        </form>
      )}
    </div>
  );
};

export default Operations;
