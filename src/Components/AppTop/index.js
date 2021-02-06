import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';

const AppTop = () => {
    useEffect(()=>{
        const el = document.documentElement;
        if(el.classList.value.length < 1){
            el.classList.add('mtn-dark');
        } 
    },[])

    const changeTheme = (e) => {
        const el = document.documentElement;
        el.className = "";
        el.classList.add(`mtn-${e}`);
    }

    return (
        <div className="appTop">
            <div onClick={() => changeTheme('dark')}>
                dark
            </div>
            <div onClick={() => changeTheme('light')}>
                light
            </div>
            <button onClick={() => Auth.signOut()}>Sign out</button>
        </div>
    )
}


export default AppTop;
