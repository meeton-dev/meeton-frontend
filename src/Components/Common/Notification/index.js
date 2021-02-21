import React, { useEffect, useState, useCallback } from "react";
import { useAppState } from "../../../context/context";

export const setNotification = async (dispatch, msg) => {dispatch({reducer: 'SET_NOTIFICATION', obj: msg})};

const Notifications = () => {
  const {notifications} = useAppState();
  const [notis, setNotis] = useState([]);

  const changeIt = useCallback((i) =>{
    const newNotis = [...notis];
    newNotis.splice(i, 1);
    setNotis(newNotis);
  },[notis])

  useEffect(()=>{
    if(notifications){
      setNotis(prevState => {
        const newState = [...prevState, notifications]
        return newState;
      })
    }
  },[notifications]);

  useEffect(() => {
    if(notis && notis.length > 0) {
        let timerFunc = setTimeout(() => {
          changeIt(0);
        }, 5000);

        return () => clearTimeout(timerFunc);
    }
  }, [notis, changeIt]);

  return (
    <div className="mnNotifications">
      {notis.map((item, i)=> {
        return(
          <div key={i} onClick={() => changeIt(i)} className="mnNotifications-item">
            <div className="icn">
              <span className={`${item.icon ? item.icon : 'icon-tick-mark'}`} />
            </div>
            <div>{item.text}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Notifications;