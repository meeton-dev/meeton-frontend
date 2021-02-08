import React from 'react';
import { Auth } from 'aws-amplify';
import ThemeSwap from './ThemeSwap';
import UserPanel from './UserPanel';

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
