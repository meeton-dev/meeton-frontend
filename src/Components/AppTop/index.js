import React from 'react';
import { Auth } from 'aws-amplify';
import ThemeSwap from './ThemeSwap';
import UserPanel from './UserPanel';
// import { showModal } from '../Common/Modals';
// import { useAppDispatch } from '../../context/context';
// import { setNotification } from '../Common/Notification';


const AppTop = () => {
    // const dispatch = useAppDispatch();
    return (
        <div className="appTop">
            <UserPanel />
            <ThemeSwap />
            {/* <div className="modaltest">
                <button onClick={() => showModal(dispatch, 'CREATE_MEETING', true)}>modal test 1</button>
                <button onClick={() => showModal(dispatch, 'QUICK_OPTIONS', true)}>modal test 2</button>
                <button onClick={() => setNotification(dispatch, {text: 'Notificaion test', timestamp: new Date().getTime()})}>notification send</button>
            </div> */}
            <div className="logOut">
                <button onClick={() => Auth.signOut()}><span className="icon-power" /></button>
            </div>
        </div>
    )
}


export default AppTop;
