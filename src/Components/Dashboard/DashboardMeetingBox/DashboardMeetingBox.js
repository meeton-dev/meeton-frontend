import React, { Component } from 'react';
import { Avatar } from '../../../Components/Common/avatar';
import { Tooltip } from 'antd'
import Moment from 'react-moment';
import { DatePicker, Checkbox } from "antd";
import { Popover, Button } from 'antd';
import {Link} from 'react-router-dom'


class DashboardMeetingBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
    render() {
        const { data } = this.props;
        const randomNumberUser = Math.floor(Math.random() * 25) + 2;
        return (
            <div className={`meeting-box ${data}`}>
                <div className="top">
                    <div className={`typeOf ${data}`}>
                        <span />
                        {data}
                    </div>
                    <div>
                        <i className="ico-star" />
                    </div>
                </div>
                <div className="mid">
                    <div>
                        <Avatar />
                        <div className="lead">
                            <div className="title">Weekly meeting with Business Team</div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi neque.</div>
                        </div>
                    </div>
                    <div className="actions">
                        <Button type="primary" size='small' to={'/lobby'}>
                            <Link to='/lobby'>

                            Go to Lobby
                            </Link>
                        </Button>
                    </div>
                    <div className="extra-info">
                        <div>
                            <i className="icon ico-users-alt-5" />
                            <span>{randomNumberUser}</span>
                        </div>
                        <div>
                            <i className="icon ico-clock-time" />
                            <span>40min</span>
                        </div>
                        <div>
                            <i className="icon ico-files-stack" />
                            <span>12</span>
                        </div>
                        <div>
                            <i className="icon ico-notepad" />
                            <span>70</span>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <Popover placement="top" title={'Users in meeting'} content={'user list'} trigger="hover">
                        <div className="in-meeting">
                            {[...Array(randomNumberUser)].map((e,i) => {
                                return (
                                    i < 10 && <div key={i} className="user">
                                    <Avatar micro/>
                                </div>
                                )
                            })}
                        </div>
                    </Popover>
                </div>
            </div>
    )}
}


export default DashboardMeetingBox;
