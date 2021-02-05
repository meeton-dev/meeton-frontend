import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

const AppTop = () => {
    return (
        <div className="appTop">
            <button onClick={() => Auth.signOut()}>Sign out</button>
        </div>
    )
}


export default AppTop;
