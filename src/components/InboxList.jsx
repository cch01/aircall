import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import { ArchiveIcon } from './icons.jsx';
import Section from './Section.jsx';
import Activity from './Activity.jsx';

const ArchiveAllButton = () => (
  <div className="rounded-lg border w-full flex p-4 justify-center items-center items-center">
    <div className="h-4 w-4"><ArchiveIcon /></div>
    <div className="ml-2">Archive all calls</div>
  </div>
);

const InboxList = ({ activities }) => {
  const activitiesByDate = {};

  activities.forEach((activity) => {
    const key = useMemo(() => moment(activity.created_at).format('LL'), [activity.created_at]);
    if (!(key in activitiesByDate)) activitiesByDate[key] = [activity];
    else activitiesByDate[key].push(activity);
  });

  const fullItemList = useMemo(() => {
    const list = [];
    _.keys(activitiesByDate).forEach((date) => {
      list.push(<Section title={date} key={date} />);
      list.push(...activitiesByDate[date].map((_activity) => <Activity activityData={_activity} key={_activity.id} />));
    });
    return list;
  }, [activitiesByDate]);

  return (
    <div className="w-full space-y-4">
      <ArchiveAllButton />
      {fullItemList}
    </div>
  );
};

InboxList.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InboxList;
