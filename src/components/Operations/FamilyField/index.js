/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import Options from './Options';

import './style.scss';

const FamilyField = ({
  onChange,
  data,
  placeholder,
  name,
}) => {
  const options = data.map((option) => {
    return (
      <Options key={option.family_id} keyData={option.family_id} value={option.name} />
    );
  });

  return (
    <div className="selectfield">
      <select name={name} onChange={onChange}>
        <option value="">{placeholder}</option>
        {options}
      </select>
    </div>
  );
};

FamilyField.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FamilyField;
