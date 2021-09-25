import classnames from 'classnames';
import React from 'react';

const Tab = ({ label, isOn }) => (
  <div className={classnames({ 'border-b-4 ease-in-out': isOn }, 'align-bottom w-16 p-1 pb-0 text-base')}>
    {label}
  </div>
);

export default Tab;
