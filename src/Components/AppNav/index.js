import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { mtnRoutes, mtnOptionsRoutes } from '../../DynamicRouter';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

// Can be deleted later
const devRoutes = [
    {
        id: 1,
        path: "/lobby/testId123", 
        title:'Lobby page',
        icon:'icon-star'
    },
    { 
        id: 2,
        path: "/meeting/testId123", 
        title:'Meeting call',
        icon:'icon-star'},
    { 
        id: 3,
        path: "/room/testRoomId123", 
        title:'Meeting page',
        icon:'icon-star'
    },
]
const AppNav = (props) => {
    const {toggleMenu} = props;
    const {t} = useTranslation('mtnApp');

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className={`appNav`}>
            <div className='toggleMenu' onClick={toggleMenu}/>
            <h3>
                {t('nav.my_stuff')}
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
                {t('nav.options')}
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
            <h3>
                Developer
            </h3>
            <ul>
                {devRoutes.map((item) => 
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
