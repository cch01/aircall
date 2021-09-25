import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Tab from './Tab.jsx';

const Header = ({ currentPath }) => {
  const history = useHistory();
  const onClickInbox = useCallback(() => history.replace('/inbox'),
    [history]);
  const onClickArchives = useCallback(() => history.replace('/archives'),
    [history]);

  return (
    <div className="h-12 w-full shadow flex flex-row justify-between items-end">
      <div className="w-1/3 h-full p-2">
        <div className="w-full h-full bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url("public/assets/dialer.svg")' }} />
      </div>
      <div className="block text-center h-full p-4 pb-0 flex flex-row space-x-3">
        <Tab label="Inbox" onClick={onClickInbox} isOn={currentPath === '/inbox'} />
        <Tab label="Archives" onClick={onClickArchives} isOn={currentPath === '/archives'} />
      </div>
    </div>
  );
};

Header.propTypes = {
  currentPath: PropTypes.oneOf(['/inbox', '/archives']).isRequired,
};

export default Header;
