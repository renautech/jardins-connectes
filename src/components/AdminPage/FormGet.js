/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const FormGet = ({
  adminStore,
  getInfos,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name);
    getInfos(event.target.name);
  };

  console.log(adminStore.infos);

  const showInfo = adminStore.infos.map((unit) => {
    return (
      <div className="adminpage__form__get1__info">
        <p className="adminpage__form__get1__info-text">Id :  {unit.id}</p>
        <p className="adminpage__form__get1__info-text">Nom : {unit.name}</p>
        <p className="adminpage__form__get1__info-text">Description : {unit.description}</p>
        <p className="adminpage__form__get1__info-text">Image : {unit.picture}</p>
      </div>
    );
  });

  // const showInfo = fake.map((unit) => {
  //   return (
  //     <div className="adminpage__form__get1__info">
  //       Nom : {unit.name}
  //     </div>
  //   );
  // });

  return (
    <div className="adminpage__form">
      <div className="adminpage__form__get1">
        {showInfo}
      </div>
      <div className="adminpage__form__get2">
        {/* <form name="users" onSubmit={handleOnSubmit}>
          <button className="adminpage__form__get2__button" type="submit">Afficher tous les utilisateurs</button>
        </form> */}
        <form name="families" onSubmit={handleOnSubmit}>
          <button className="adminpage__form__get2__button" type="submit">Afficher toutes les familles</button>
        </form>
        <form name="varieties" onSubmit={handleOnSubmit}>
          <button className="adminpage__form__get2__button" type="submit">Afficher toutes les variétés</button>
        </form>
        <form name="operation_types" onSubmit={handleOnSubmit}>
          <button className="adminpage__form__get2__button" type="submit">Afficher tous les types d'opérations</button>
        </form>
      </div>
    </div>
  );
};

FormGet.propTypes = {
  adminStore: PropTypes.object.isRequired,
  getInfos: PropTypes.func.isRequired,
};

export default FormGet;
