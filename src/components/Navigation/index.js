/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Navigation = ({
  isLogged,
  isAdmin,
}) => {
  return (
    <div className="navigation">
      <nav className="navigation__nav">
        {isLogged && (
        <div>
          <NavLink to="/" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
            Accueil
          </NavLink>
          <NavLink to="/mon-jardin" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
            Mon Jardin
          </NavLink>
          <NavLink to="/mon-profil" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
            Mon profil
          </NavLink>
          {isAdmin && (
            <NavLink to="/administration" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
              Admin
            </NavLink>
          )}
        </div>
        )}
        {!isLogged && (
        <div>
          <NavLink to="/" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
            Accueil
          </NavLink>
        </div>
        )}
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default Navigation;
