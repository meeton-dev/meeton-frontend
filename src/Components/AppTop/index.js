import React from 'react';
import { Auth } from 'aws-amplify';
import ThemeSwap from './ThemeSwap';
import UserPanel from './UserPanel';
// import { showModal } from '../Common/Modals';
// import { useAppDispatch } from '../../context/context';
// import { setNotification } from '../Common/Notification';

const AppTop = () => (
  <div className="appTop">
    <UserPanel />
    <ThemeSwap />
    <div className="logOut">
      <button
        type="button"
        tabIndex="-1"
        onKeyDown={() => {}}
        onClick={() => Auth.signOut()}
      >
        <span className="icon-power" />
      </button>
    </div>
  </div>
);

export default AppTop;
