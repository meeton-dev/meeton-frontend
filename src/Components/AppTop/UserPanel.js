import React, { useEffect, useState } from 'react';

const UserPanel = () => {
  
    return (
        <div className="userPanel">
            <div className='userPanel-avatar'>

            </div>
            <div className='userPanel-notificaions'>
                <span className="icon-bell"/>
                <span className="badge">3</span>
            </div>
        </div>
    )
}


export default UserPanel;
