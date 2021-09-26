import React from 'react';
import PropTypes from 'prop-types';
import { ArchiveIcon } from './Icons.jsx';
import ActivityList from './ActivityList.jsx';

const ArchiveAllButton = () => (
  <div className="rounded-lg border w-full flex p-4 justify-center items-center items-center">
    <div className="h-4 w-4"><ArchiveIcon /></div>
    <div className="ml-2">Archive all calls</div>
  </div>
);

const InboxList = ({ activities }) => {
  if (!activities?.length) {
    return (
      <div className="flex items-center justiy-center h-full w-full">
        <div className="text-lg text-gray-500 text-center w-full">No records found.</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full space-y-4 overflow-scroll p-4 pb-12">
      <ArchiveAllButton />
      <ActivityList activities={activities} />
    </div>
  );
};

InboxList.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InboxList;
