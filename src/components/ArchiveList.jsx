import React from 'react';
import PropTypes from 'prop-types';
import ActivityList from './ActivityList.jsx';
import { UnArchiveIcon } from './Icons.jsx';
import useStores from '../lib/hooks/useStores';

const UnArchiveAllButton = ({ onClick }) => (
  <div onClick={onClick} className="rounded-lg border w-full flex p-4 justify-center items-center items-center cursor-pointer">
    <div className="h-full w-4"><UnArchiveIcon /></div>
    <div className="ml-2">Unarchive all calls</div>
  </div>
);

const ArchiveList = ({ activities }) => {
  const { activityStore } = useStores();
  if (!activities?.length) {
    return (
      <div className="flex items-center justiy-center h-full w-full">
        <div className="text-lg text-gray-500 text-center w-full">No records found.</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full space-y-4 overflow-scroll p-4 pb-12">
      <UnArchiveAllButton onClick={activityStore.unArchiveAll} />
      <ActivityList activities={activities} />
    </div>
  );
};

ArchiveList.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArchiveList;
