/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const FormFamilies = ({
  adminReqPost,
  changeFormValues,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.name);
    adminReqPost(event.target.name);
  };

  const onChange = (event) => {
    event.preventDefault();
    console.log(event.target.name);
    changeFormValues(event.target.name, event.target.value);
  };

  return (
    <div className="adminpage__form">
      <h2 className="adminpage__form__title">Gestion des familles</h2>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Création d'une famille</h3>
        <form name="families" onSubmit={handleOnSubmit} encType="multipart/form-data">
          <input onChange={onChange} type="text" name="nameInput" placeholder="Nom de la famille" />
          <input onChange={onChange} type="text" name="description" placeholder="Description" />
          <input onChange={onChange} type="file" name="file" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Mise à jour d'une famille</h3>
        <form>
          <input type="text" name="id" placeholder="ID de la famille" />
          <input type="text" name="name" placeholder="Nom de la famille" />
          <input type="text" name="description" placeholder="Description" />
          <input type="file" name="file" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Suppression d'une famille</h3>
        <form>
          <input type="text" name="id" placeholder="ID de la famille" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
};

FormFamilies.propTypes = {
  adminReqPost: PropTypes.func.isRequired,
  changeFormValues: PropTypes.func.isRequired,
};

export default FormFamilies;
