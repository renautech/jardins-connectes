/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const FormFamilies = ({
  adminReqPost,
  adminFamilyPatch,
  adminFamilyDelete,
  changeFormValues,
  resetFormValues,
}) => {
  const handleOnSubmitPost = (event) => {
    event.preventDefault();
    adminReqPost(event.target.name);
    resetFormValues();
    document.getElementById(event.target.id).reset();
  };

  const handleOnSubmitPatch = (event) => {
    event.preventDefault();
    adminFamilyPatch(event.target.name);
    resetFormValues();
    document.getElementById(event.target.id).reset();
  };

  const handleOnSubmitDelete = (event) => {
    event.preventDefault();
    adminFamilyDelete(event.target.name);
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
      <h2 className="adminpage__form__title">Gestion des familles</h2>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Création d'une famille</h3>
        <form id="1" name="families" onSubmit={handleOnSubmitPost} encType="multipart/form-data">
          <input onChange={onChange} type="text" name="nameInput" placeholder="Nom de la famille" />
          <input onChange={onChange} type="text" name="description" placeholder="Description" />
          <input onChange={onChange} type="file" name="file" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Mise à jour d'une famille</h3>
        <form id="2" name="families" onSubmit={handleOnSubmitPatch} encType="multipart/form-data">
          <input onChange={onChange} type="number" name="targetId" placeholder="ID de la famille" />
          <input onChange={onChange} type="text" name="nameInput" placeholder="Nom de la famille" />
          <input onChange={onChange} type="text" name="description" placeholder="Description" />
          <input onChange={onChange} type="file" name="file" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Suppression d'une famille</h3>
        <form id="3" name="families" onSubmit={handleOnSubmitDelete} encType="multipart/form-data">
          <input onChange={onChange} type="text" name="targetId" placeholder="ID de la famille" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
};

FormFamilies.propTypes = {
  adminReqPost: PropTypes.func.isRequired,
  adminFamilyPatch: PropTypes.func.isRequired,
  adminFamilyDelete: PropTypes.func.isRequired,
  changeFormValues: PropTypes.func.isRequired,
  resetFormValues: PropTypes.func.isRequired,
};

export default FormFamilies;
