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
  adminVarietyPost,
  adminOperationTypePost,
  adminFamilyPatch,
  adminVarietyPatch,
  adminOperationTypePatch,
  adminFamilyDelete,
  adminVarietyDelete,
  adminOperationTypeDelete,
  changeFormValues,
  resetFormValues,
}) => {
  return (
    <div className="adminpage">
      <FormGet getInfos={getInfos} adminStore={adminStore} />
      <FormFamilies
        adminReqPost={adminReqPost}
        adminFamilyPatch={adminFamilyPatch}
        adminFamilyDelete={adminFamilyDelete}
        changeFormValues={changeFormValues}
        resetFormValues={resetFormValues}
      />
      <FormVarieties
        adminVarietyPost={adminVarietyPost}
        adminVarietyPatch={adminVarietyPatch}
        adminVarietyDelete={adminVarietyDelete}
        changeFormValues={changeFormValues}
        resetFormValues={resetFormValues}
      />
      <FormOperationsTypes
        adminOperationTypePost={adminOperationTypePost}
        adminOperationTypePatch={adminOperationTypePatch}
        adminOperationTypeDelete={adminOperationTypeDelete}
        changeFormValues={changeFormValues}
        resetFormValues={resetFormValues}
      />
    </div>
  );
};

AdminPage.propTypes = {
  adminStore: PropTypes.object.isRequired,
  getInfos: PropTypes.func.isRequired,
  adminReqPost: PropTypes.func.isRequired,
  adminVarietyPost: PropTypes.func.isRequired,
  adminOperationTypePost: PropTypes.func.isRequired,
  adminFamilyPatch: PropTypes.func.isRequired,
  adminVarietyPatch: PropTypes.func.isRequired,
  adminOperationTypePatch: PropTypes.func.isRequired,
  adminFamilyDelete: PropTypes.func.isRequired,
  adminVarietyDelete: PropTypes.func.isRequired,
  adminOperationTypeDelete: PropTypes.func.isRequired,
  changeFormValues: PropTypes.func.isRequired,
  resetFormValues: PropTypes.func.isRequired,
};

export default AdminPage;
