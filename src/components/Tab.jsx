import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ label, isOn, onClick }) => (
  <div onClick={onClick} className={classnames({ 'border-b-4 ease-in-out': isOn }, 'align-bottom w-16 p-1 pb-0 text-base cursor-pointer transition-all ease-in-out')}>
    {label}
  </div>
);

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
