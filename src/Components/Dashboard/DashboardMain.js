import React, { Component } from 'react';
import DashboardFilter from './Parts/DashboardFilter';
import DashboardMeetingBox from './Parts/DashboardMeetingBox';
import Moment from 'react-moment';
import { DatePicker, Checkbox } from "antd";

const typeArr = [
    'Scheduled',
    'Ad-hoc',
    'Scheduled timed',
]
class DashboardMain extends Component {
    render() {
        return (
            <div className="dashboard-main">
                <DashboardFilter />
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


export default DashboardMain;
