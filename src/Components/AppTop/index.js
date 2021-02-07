import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';

const LS = window.localStorage;

const AppTop = () => {

    useEffect(()=>{
        const theme = LS.getItem('theme');
        const el = document.documentElement;
        
        if(el.classList.value.length < 1){
            if(!theme){
                el.classList.add('mtn-dark');
            } else {
                el.classList.add(`mtn-${theme}`);

            }
        } 
    },[])

    const changeTheme = (e) => {
        LS.setItem('theme', e);
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
