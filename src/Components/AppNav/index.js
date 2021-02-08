import React from 'react';
import { useLocation } from "react-router-dom";
import { mtnRoutes, mtnOptionsRoutes } from '../../DynamicRouter';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const AppNav = () => {
    const {t} = useTranslation('mtnApp');

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="appNav">
            <h3>
                MY STUFF
            </h3>
            <ul>
                {mtnRoutes.map((item) => {
                    return item.id && (
                        <li key={item.id} className={isActive(item.path) ? 'active' : ''}>
                            <Link to={item.path}>
                                <span className={item.icon} />
                                <span>{t(item.title)}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <h3>
                OPTIONS
            </h3>
            <ul>
                {mtnOptionsRoutes.map((item) => 
                     item.id && (
                        <li key={item.id} className={isActive(item.path) ? 'active' : ''}>
                            <Link to={item.path}>
                                <span className={item.icon}></span>
                                <span>{t(item.title)}</span>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}


export default AppNav;
