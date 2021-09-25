import React from 'react';
import PropTypes from 'prop-types';
import ActivityList from './ActivityList.jsx';

const ArchiveList = ({ activities }) => (
  <div className="w-full h-full space-y-4 overflow-scroll p-4 pb-12">
    <ActivityList activities={activities} />
  </div>
);

ArchiveList.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArchiveList;
