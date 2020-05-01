import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardFilter from './Parts/DashboardFilter';
import DashboardMeetingBox from './Parts/DashboardMeetingBox';
import axios from "axios";

import Moment from 'react-moment';
import { DatePicker, Checkbox } from "antd";

const typeArr = [
    'Scheduled',
    'Ad-hoc',
    'Scheduled timed',
]

// const history = useHistory();

class DashboardMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    createMeeting = () => {
        const { history } = this.props;
        axios.post("http://localhost:3001/meetings").then((res) => {
            const { code } = res.data.meeting;
            console.log(res.data.meeting);
            history.push(`/lobby/${code}`);
        });
    };

    render() {


        return (
            <div className="dashboard-main">
                <DashboardFilter />
                <button onClick={() => this.createMeeting()}>
                    Instant Create Meeting
                </button>
                <div className="meetings-store-wrapper">
                    <div className="meetings-list-scroll">
                        {[...Array(40)].map((e,i) => {
                            return <DashboardMeetingBox key={i} data={typeArr[Math.floor(Math.random() * typeArr.length)]}/>
                        })}
                    </div>
                </div>
            </div>
    )}
}


function mapStateToProps({ }) { return {} }

export default connect(mapStateToProps, {})(DashboardMain);