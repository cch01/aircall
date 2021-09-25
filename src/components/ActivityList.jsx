import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import Section from './Section.jsx';
import Activity from './Activity.jsx';

const ActivityList = ({ activities }) => {
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

  return <>{fullItemList}</>;
};

ActivityList.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ActivityList;
