import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import ThemeSwap from './ThemeSwap';
import UserPanel from './UserPanel';

const LS = window.localStorage;

const AppTop = () => {

    return (
        <div className="appTop">
            <UserPanel />
            <ThemeSwap />
            <div className="logOut">
                <button onClick={() => Auth.signOut()}><span className="icon-power" /></button>
            </div>
        </div>
    )
}


export default AppTop;
