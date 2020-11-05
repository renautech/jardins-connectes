/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const FormVarieties = ({
  adminVarietyPost,
  adminVarietyPatch,
  adminVarietyDelete,
  changeFormValues,
  resetFormValues,
}) => {
  const handleOnSubmitPost = (event) => {
    event.preventDefault();
    adminVarietyPost(event.target.name);
    resetFormValues();
    document.getElementById(event.target.id).reset();
  };

  const handleOnSubmitPatch = (event) => {
    event.preventDefault();
    adminVarietyPatch(event.target.name);
    resetFormValues();
    document.getElementById(event.target.id).reset();
  };

  const handleOnSubmitDelete = (event) => {
    event.preventDefault();
    adminVarietyDelete(event.target.name);
    resetFormValues();
    document.getElementById(event.target.id).reset();
  };

  const onChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'file') {
      changeFormValues(event.target.name, event.target.files[0]);
    }
    else {
      changeFormValues(event.target.name, event.target.value);
    }
  };
  return (
    <div className="adminpage__form">
      <h2 className="adminpage__form__title">Gestion des variétés</h2>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Création d'une variété</h3>
        <form id="4" name="varieties" onSubmit={handleOnSubmitPost} encType="multipart/form-data">
          <input onChange={onChange} type="text" name="nameInput" placeholder="Nom de la variété" />
          <input onChange={onChange} type="number" name="targetId" placeholder="ID de la famille" />
          <input onChange={onChange} type="text" name="description" placeholder="Description" />
          <input onChange={onChange} type="file" name="file" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Mise à jour d'une variété</h3>
        <form id="5" name="varieties" onSubmit={handleOnSubmitPatch} encType="multipart/form-data">
          <input onChange={onChange} type="number" name="targetId" placeholder="ID de la variété" />
          <input onChange={onChange} type="text" name="nameInput" placeholder="Nom de la variété" />
          <input onChange={onChange} type="text" name="description" placeholder="Description" />
          <input onChange={onChange} type="file" name="file" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Suppression d'une variété</h3>
        <form id="6" name="varieties" onSubmit={handleOnSubmitDelete} encType="multipart/form-data">
          <input onChange={onChange} type="number" name="targetId" placeholder="ID de la variété" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
};

FormVarieties.propTypes = {
  adminVarietyPost: PropTypes.func.isRequired,
  adminVarietyPatch: PropTypes.func.isRequired,
  adminVarietyDelete: PropTypes.func.isRequired,
  changeFormValues: PropTypes.func.isRequired,
  resetFormValues: PropTypes.func.isRequired,
};

export default FormVarieties;
