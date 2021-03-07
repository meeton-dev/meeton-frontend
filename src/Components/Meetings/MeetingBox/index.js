/* eslint-disable */
import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

class MeetingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { data } = this.props;
    const {
      type, users, date, date_extended, visible,
    } = data;
    // console.log(data);
    return (
      <div className={`box meeting-box ${type}`}>
        <div className="top">
          <div className={`typeOf ${type}`}>
            <span />
            {type}
          </div>
          <div>
            <span className="icon-star" />
          </div>
        </div>
        <div className="mid">
          <div>
            {/* <Avatar /> */}
            <div className="lead">
              <Moment date={date_extended} format="YYYY-MM-DD - HH:mm" />
              <div className="title">Weekly meeting with Business Team</div>
              <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi neque.</div>
            </div>
          </div>
          {visible === 1
                        && (
                        <div className="actions">
                          <button type="button" size="small" to="/lobby">
                            <Link to="/lobby">

                              Go to Lobby
                            </Link>
                          </button>
                        </div>
                        )}
          <div className="extra-info">
            <div>
              <i className="icon ico-users-alt-5" />
              <span>{users}</span>
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
      </div>
    );
  }
}

export default MeetingBox;
