import React from 'react';
import { Auth } from 'aws-amplify';
import ThemeSwap from './ThemeSwap';
import UserPanel from './UserPanel';
import { showModal } from '../Common/Modals';
import { useAppDispatch } from '../../context/context';


const AppTop = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="appTop">
            <UserPanel />
            <ThemeSwap />
            <div className="modaltest">
                <button onClick={() => showModal(dispatch, 'CREATE_MEETING', true)}>modal test 1</button>
                <button onClick={() => showModal(dispatch, 'QUICK_OPTIONS', true)}>modal test 2</button>
                <button onClick={() => showModal(dispatch, 'SUPPORT', true)}>modal test 3</button>
            </div>
            <div className="logOut">
                <button onClick={() => Auth.signOut()}><span className="icon-power" /></button>
            </div>
        </div>
    )
}


export default AppTop;
