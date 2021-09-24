import React from 'react';
import classnames from 'classnames';

const Header = ({currentTab}) => {
  return (
    <div className="h-12 w-full shadow p-2 ">
      <div className="w-full h-full bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url("public/assets/dialer.svg")' }}/>
    </div>
  );
};

export default Header;
