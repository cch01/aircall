import React from 'react';
import PropTypes from 'prop-types';
import { ArchiveIcon } from '../components/icons.jsx';
import ActivityList from '../components/ActivityList.jsx';
import useStores from '../lib/hooks/useStores';

const ArchiveAllButton = ({ onClick }) => (
  <div onClick={onClick} className="rounded-lg border w-full flex p-4 justify-center items-center items-center cursor-pointer">
    <div className="h-full w-4"><ArchiveIcon /></div>
    <div className="ml-2">Archive all calls</div>
  </div>
);

const Inbox = ({ activities }) => {
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
      <ArchiveAllButton onClick={activityStore.archiveAll} />
      <ActivityList activities={activities} />
    </div>
  );
};

Inbox.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Inbox;
