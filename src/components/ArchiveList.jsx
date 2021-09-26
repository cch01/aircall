import React from 'react';
import PropTypes from 'prop-types';
import ActivityList from './ActivityList.jsx';

const ArchiveList = ({ activities }) => {
  if (!activities?.length) {
    return (
      <div className="flex items-center justiy-center h-full w-full">
        <div className="text-lg text-gray-500 text-center w-full">No records found.</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full space-y-4 overflow-scroll p-4 pb-12">
      <ActivityList activities={activities} />
    </div>
  );
};

ArchiveList.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArchiveList;
