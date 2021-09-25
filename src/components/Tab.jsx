import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ label, isOn }) => (
  <div className={classnames({ 'border-b-4 ease-in-out': isOn }, 'align-bottom w-16 p-1 pb-0 text-base')}>
    {label}
  </div>
);

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
};

export default Tab;
