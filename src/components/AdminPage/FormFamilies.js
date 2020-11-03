/* eslint-disable arrow-body-style */
import React from 'react';

import './style.scss';

const FormFamilies = () => {
  return (
    <div className="adminpage__form">
      <h2 className="adminpage__form__title">Gestion des familles</h2>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Création d'une famille</h3>
        <form>
          <input type="text" name="name" placeholder="Nom de la famille" />
          <input type="text" name="description" placeholder="Description" />
          <input type="file" name="file" />
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

export default FormFamilies;
