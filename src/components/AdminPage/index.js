/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import FormGet from './FormGet';
import FormFamilies from './FormFamilies';
import FormVarieties from './FormVarieties';
import FormOperationsTypes from './FormOperationsTypes';

import './style.scss';

const AdminPage = ({
  adminStore,
  getInfos,
  adminReqPost,
  changeFormValues,
}) => {
  return (
    <div className="adminpage">
      <FormGet getInfos={getInfos} adminStore={adminStore} />
      <FormFamilies adminReqPost={adminReqPost} changeFormValues={changeFormValues} />
      <FormVarieties />
      <FormOperationsTypes />
    </div>
  );
};

AdminPage.propTypes = {
  adminStore: PropTypes.object.isRequired,
  getInfos: PropTypes.func.isRequired,
  adminReqPost: PropTypes.func.isRequired,
  changeFormValues: PropTypes.func.isRequired,
};

export default AdminPage;
