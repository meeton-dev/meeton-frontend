import React, { Component } from 'react';
import { Popover } from 'antd';
import { navItems } from './SideNav-items';
import {Link} from 'react-router-dom'

class SideNav extends Component {
    render() {
        return (
            <nav className="side-nav">
                <Popover placement="right" title={'This is meeton. '} content={'meeton. is a fucking good webapp.... will be... hopefully'} trigger="hover" overlayClassName='main-nav-item-help'>
                    <div className="logo">
                    </div>
                </Popover>
                <ul>
                    {navItems.map((item, i) => {
                        return (
                            <Popover key={i} placement="right" title={item.title} content={item.description} trigger="hover" overlayClassName='main-nav-item-help'>
                                <li>
                                    <Link to={item.url ? item.url : '/'}>
                                        <i className={item.icon + ` ico-2x`} />
                                        {item.badge !== null && <span className="badge">{item.badge}</span>}
                                    </Link>
                                </li>
                            </Popover>
                        )
                    })}
                </ul>
            </nav>
    )}
}

export default SideNav;