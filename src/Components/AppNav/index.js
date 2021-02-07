import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { mtnRoutes, mtnOptionsRoutes } from '../../DynamicRouter';
import { Link } from 'react-router-dom';

const AppNav = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="appNav">
            <h3>
                MY STUFF
            </h3>
            <ul>
                {mtnRoutes.map((item) => item.id && <li key={item.id} className={isActive(item.path) ? 'active' : ''}><Link to={item.path}>{item.title}</Link></li>)}
            </ul>
            <h3>
                OPTIONS
            </h3>
            <ul>
                {mtnOptionsRoutes.map((item) => item.id && <li key={item.id} className={isActive(item.path) ? 'active' : ''}><Link to={item.path}>{item.title}</Link></li>)}
            </ul>
        </div>
    )
}


export default AppNav;
