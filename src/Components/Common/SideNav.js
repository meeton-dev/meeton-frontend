import React, { Component } from 'react';
import { navItems } from './SideNav-items';
import {Link} from 'react-router-dom'

class SideNav extends Component {
    render() {
        return (
            <nav className="side-nav">
                <ul>
                    {navItems.map((item, i) => {
                        return (
                            <li>
                                <Link to={item.url ? item.url : '/'}>
                                    <i className={item.icon + ` ico-2x`} />
                                    {item.badge !== null && <span className="badge">{item.badge}</span>}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
    )}
}

export default SideNav;