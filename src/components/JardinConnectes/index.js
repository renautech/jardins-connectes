/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// components import
import Page from 'src/components/Page';
import Description from 'src/components/Description';
import HomeVideo from 'src/components/HomeVideo';
import SignupEmailValidation from 'src/components/SignupForm/SignupEmailValidation';
import LoginForm from 'src/containers/LoginForm';
import SignupForm from 'src/containers/SignupForm';
import NavigationMobile from 'src/containers/NavigationMobile';
import Garden from 'src/containers/Garden';
import Profile from 'src/containers/Profile';
import ProfileEdit from 'src/containers/ProfileEdit';
import AdminPage from 'src/containers/AdminPage';
import OperationList from 'src/containers/OperationList';
import OperationListEmptyBoard from 'src/containers/OperationListEmptyBoard';

import dataUser from 'src/data/dataFake';
import './style.scss';

const JardinConnectes = ({
  isLogged,
  logged,
  isAdmin,
  isSigned,
  profileEdition,
  flagEmptyBoard,
}) => {

  useEffect( () => {
    if (sessionStorage.getItem("login")) {
      logged();
    };
  }, []);

  return (
    <div className="jardinconnectes">

      <Route path="/navMobile">
        <NavigationMobile />
      </Route>

      <Route exact path="/">
        <Page>
          <HomeVideo />
          <Description />
        </Page>
      </Route>

      <Route path="/mon-jardin">
        {!isLogged && (
          <Redirect to="/connexion" />
        )}
        <Page>
          <Garden />
        </Page>
      </Route>

      <Route path="/connexion">
        {isLogged && (
          <Redirect to="/mon-jardin" />
        )}
        <Page>
          <LoginForm />
        </Page>
      </Route>

      <Route path="/inscription">
        
        <Page>
          <SignupForm />
          {isSigned && (
            <SignupEmailValidation />
          )}
        </Page>
      </Route>

      <Route exact path="/mon-profil">
        <Page>
          { profileEdition ? (
            <ProfileEdit />
          ) : (
            <Profile />
          )}
        </Page>
      </Route>

      <Route exact path="/liste-operations">
        {!isLogged && (
          <Redirect to="/connexion" />
        )}
        <Page>
          {flagEmptyBoard && (
            <OperationListEmptyBoard />
          )}
          {!flagEmptyBoard && (
            <OperationList dataOperations={dataUser.operation} />
          )}
        </Page>
      </Route>


      <Route exact path="/administration">
        {!isAdmin && (
          <Redirect to="/connexion" />
        )}
        <Page>
          <AdminPage />
        </Page>
      </Route>

    </div>
  );
};

JardinConnectes.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isSigned: PropTypes.bool.isRequired,
  profileEdition: PropTypes.bool.isRequired,
};

export default JardinConnectes;
