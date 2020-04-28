import React, { Component } from 'react';
import { Popover } from 'antd';
import logo from '../../assets/logos/logo-white.png';
import { navItems } from './helpers/nav-items';

class DashboardNav extends Component {
    render() {
        return (
            <nav className="general-nav">
                <Popover placement="right" title={'This is meeton. '} content={'meeton. is a fucking good webapp.... will be... hopefully'} trigger="hover" overlayClassName='main-nav-item-help'>
                    <div className="logo">
                        <div className="logo-thumb" ><img src={logo} alt="meeton logo" /></div>
                    </div>
                </Popover>
                <ul>
                    {navItems.map((item, i) => {
                        return (
                            <Popover key={i} placement="right" title={item.title} content={item.description} trigger="hover" overlayClassName='main-nav-item-help'>
                                <li>
                                    <span>
                                        <i className={item.icon + ` ico-2x`} />
                                        {item.badge !== null && <span className="badge">{item.badge}</span>}
                                    </span>
                                </li>
                            </Popover>
                        )
                    })}
                </ul>
            </nav>
    )}
}

export default DashboardNav;
