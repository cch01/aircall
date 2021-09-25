import PropTypes from 'prop-types';
import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';
import moment from 'moment';
import classnames from 'classnames';

const PhoneMissedIcon = () => <i className="fa-solid fa-phone-xmark" />;
const PhoneAnsweredIcon = () => <i className="fa-solid fa-phone-volume" />;
const VoicemailIcon = () => <i className="fa-solid fa-voicemail" />;
const InboundIcon = () => <i className="fa-solid fa-arrow-down transform rotate-45" />;
const OutboundIcon = () => <i className="fa-solid fa-arrow-up transform rotate-45" />;
const ArchiveIcon = () => <i className="fa-solid fa-box-archive" />;
const UnArchiveIcon = () => <i className="fa-solid fa-box-open" />;

const directionIconMapper = {
  inbound: <InboundIcon />,
  outbound: <OutboundIcon />,
};

const callStatusIconMapper = {
  missed: <PhoneMissedIcon />,
  answered: <PhoneAnsweredIcon />,
  voicemail: <VoicemailIcon />,
};

const UpDownIcon = ({ isExpanded }) => <i className={classnames({ 'transform rotate-180': isExpanded }, 'cursor-pointer fa-solid fa-angle-down font-medium')} />;

const callStatusTextMapper = {
  missed: 'Missed Call',
  answered: 'Answered Call',
  voicemail: 'Voicemail',
};

const Activity = ({
  activityData, onChangeArchiveState,
}) => {
  const {
    id, created_at, direction, from, to, via, duration, is_archived, call_type,
  } = activityData;
  const [isExpanded, setIsExpanded] = useState(false);
  const time = useMemo(() => moment(created_at).format('HH:mm a'));
  const onChangeExpandState = useCallback(() => setIsExpanded(!isExpanded), [setIsExpanded, isExpanded]);
  console.log(isExpanded);
  return (
    <div className="rounded-lg border w-full flex flex-col p-2 items-center transition-all">
      <div className="flex flex-row w-full h-8 justify-between">
        <div className="flex flex-row items-center">
          <div className="w-4 h-4 align-middle">{directionIconMapper[direction]}</div>
          <div className="ml-1 flex flex-col justify-evenly ">
            <div className="font-medium text-left ">{from}</div>
            <div className="text-gray-300 text-xs">{`Tried to call on ${via}`}</div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="text-gray-300">{time}</div>
          <div onClick={onChangeExpandState} className="flex justify-center items-center p-2 h-4 w-4">
            <UpDownIcon isExpanded={isExpanded} />
          </div>
        </div>
      </div>
      <div className={classnames({ 'mt-1 h-8 opacity-100': isExpanded }, 'opacity-0 h-0 flex flex-row justify-between items-center w-full transition-all px-0')}>
        <div className="h-full items-center flex flex-row">
          <div className="w-4 h-4 align-middle">{callStatusIconMapper[call_type]}</div>
          <div className="ml-1 flex flex-col items-center justify-evenly">
            {callStatusTextMapper[call_type]}
            <div>{`Duration: ${duration} s`}</div>
          </div>
        </div>
        <div onClick={() => onChangeArchiveState(id)} className="cursor-pointer flex justify-center items-center p-2 h-4 w-4">
          {is_archived ? <UnArchiveIcon /> : <ArchiveIcon />}
        </div>
      </div>
    </div>
  );
};

Activity.propTypes = {
  activityData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(['inbound', 'outbound']).isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    via: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    is_archived: PropTypes.bool.isRequired,
    call_type: PropTypes.oneOf(['missed', 'answered', 'voicemail']).isRequired,
  }).isRequired,
  onChangeArchiveState: PropTypes.func.isRequired,
};

export default Activity;
