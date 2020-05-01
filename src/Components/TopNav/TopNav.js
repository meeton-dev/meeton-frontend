import React, { Component } from 'react';
import logo2 from '../../assets/logos/logo.svg';
import { Avatar } from '../Common/avatar';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

class TopNav extends Component {

    render() {
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
                            <li>
                                <i className="ico-2x ico-question-circle" />
                                <span>
                                    Help
                                </span>
                                </li>
                            <li>
                                <i className="ico-2x ico-notification" />
                                <span>
                                    Notification
                                </span>
                            </li>
                            <li>
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
    )}
}


export default TopNav;
