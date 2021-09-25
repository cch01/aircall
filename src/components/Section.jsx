import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title }) => (
  <div className=" flex justify-center p-1">
    <div className="w-1/5 border-dotted border h-0 m-auto" />
    <div className="text-gray-400">{title}</div>
    <div className="w-1/5 border-dotted border h-0 m-auto" />
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
