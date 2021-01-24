import React, { Component } from 'react';
import logo2 from '../../assets/logos/logo.svg';
import { Avatar } from '../Common/avatar';
import { Input } from 'antd';

const { Search } = Input;

const TopNav = () => {
    return (
        <div className="top-nav">
            <div className="search">
                <Search placeholder="Search..." onSearch={value => console.log(value)} enterButton />
            </div>
            <div className="logo">
                <img src={logo2} alt="meeton" />
            </div>
            <div className="control">
                <nav className="user-nav">
                    <ul>
                        <li onClick={() => {}}>
                            <i className="ico-2x ico-question-circle" />
                            <span>
                                Support
                            </span>
                            </li>
                        <li onClick={() => {}}>
                            <i className="ico-2x ico-notification" />
                            <span>
                                Notification
                            </span>
                        </li>
                        <li onClick={() => {}}>
                            <span className="menu-dots">
                                <span />
                                <span />
                                <span />
                            </span>
                        </li>
                        <li>
                            <Avatar />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default TopNav;
