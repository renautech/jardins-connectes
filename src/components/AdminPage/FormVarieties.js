/* eslint-disable arrow-body-style */
import React from 'react';

import './style.scss';

const FormVarieties = () => {
  return (
    <div className="adminpage__form">
      <h2 className="adminpage__form__title">Gestion des variétés</h2>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Création d'une variété</h3>
        <form>
          <input type="text" name="name" placeholder="Nom de la variété" />
          <input type="text" name="description" placeholder="Description" />
          <input type="file" name="file" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Mise à jour d'une variété</h3>
        <form>
          <input type="text" name="id" placeholder="ID de la variété" />
          <input type="text" name="name" placeholder="Nom de la variété" />
          <input type="text" name="description" placeholder="Description" />
          <input type="file" name="file" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
      <div className="adminpage__form__families1">
        <h3 className="adminpage__form__subtitle">Suppression d'une variété</h3>
        <form>
          <input type="text" name="id" placeholder="ID de la variété" />
          <button className="adminpage__form__families1__button" type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
};

export default FormVarieties;
