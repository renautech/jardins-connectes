/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const FormOperationsTypes = ({
  adminOperationTypePost,
  adminOperationTypePatch,
  adminOperationTypeDelete,
  changeFormValues,
  resetFormValues,
}) => {
  const handleOnSubmitPost = (event) => {
    event.preventDefault();
    adminOperationTypePost(event.target.name);
    resetFormValues();
    document.getElementById(event.target.id).reset();
  };

  const handleOnSubmitPatch = (event) => {
    event.preventDefault();
    adminOperationTypePatch(event.target.name);
    resetFormValues();
    document.getElementById(event.target.id).reset();
  };

  const handleOnSubmitDelete = (event) => {
    event.preventDefault();
    adminOperationTypeDelete(event.target.name);
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
      <h2 className="adminpage__form__title">Gestion des opérations</h2>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Création d'une opération</h3>
        <form id="7" name="operation_types" onSubmit={handleOnSubmitPost} encType="multipart/form-data">
          <input onChange={onChange} type="text" name="nameInput" placeholder="Nom de l'opération" />
          <input onChange={onChange} type="text" name="description" placeholder="Description" />
          <input onChange={onChange} type="file" name="file" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Mise à jour d'une opération</h3>
        <form id="8" name="operation_types" onSubmit={handleOnSubmitPatch} encType="multipart/form-data">
          <input onChange={onChange} type="number" name="targetId" placeholder="ID de l'opération" />
          <input onChange={onChange} type="text" name="nameInput" placeholder="Nom de l'opération" />
          <input onChange={onChange} type="text" name="description" placeholder="Description" />
          <input onChange={onChange} type="file" name="file" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Suppression d'une opération</h3>
        <form id="9" name="operation_types" onSubmit={handleOnSubmitDelete} encType="multipart/form-data">
          <input onChange={onChange} type="number" name="targetId" placeholder="ID de l'opération" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
};

FormOperationsTypes.propTypes = {
  adminOperationTypePost: PropTypes.func.isRequired,
  adminOperationTypePatch: PropTypes.func.isRequired,
  adminOperationTypeDelete: PropTypes.func.isRequired,
  changeFormValues: PropTypes.func.isRequired,
  resetFormValues: PropTypes.func.isRequired,
};

export default FormOperationsTypes;
