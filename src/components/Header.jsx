import React from 'react';
import Tab from './Tab.jsx'
import classnames from 'classnames';

const Header = ({currentTab}) => {
  return (
    <div className="h-12 w-full shadow flex flex-row justify-between items-end">
      <div className="w-1/3 h-full p-2">
        <div className="w-full h-full bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url("public/assets/dialer.svg")' }}/>
      </div>
      <div className="block text-center h-full p-4 pb-0 flex flex-row space-x-3">
        <Tab label="Inbox" isOn={true} />
        <Tab label="Archives" isOn={false} />
      </div>
    </div>
  );
};

export default Header;
