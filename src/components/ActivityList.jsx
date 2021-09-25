import PropTypes from 'prop-types';

const ActivityList = (props) => {

};

ActivityList.propTypes = {
  id: PropTypes.number.isRequired,
  created_at: PropTypes.instanceOf(Date).isRequired,
  direction: PropTypes.oneOf(['inbound', 'outbound']).isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  via: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  is_archived: PropTypes.bool.isRequired,
  call_type: PropTypes.oneOf(['missed', 'answered', 'voicemail']).isRequired,
};

export default ActivityList;
