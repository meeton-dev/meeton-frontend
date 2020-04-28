import React, { Component } from 'react';
import Moment from 'react-moment';
import { DatePicker, Checkbox } from "antd";

const options = [
    { label: 'Scheduled', value: '1' },
    { label: 'Timed', value: '2' },
    { label: 'Ad-hoc', value: '3' },
];

class DashboardFilter extends Component {

    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    render() {
        return (
            <div className="dashboard-filters">
                <DatePicker />
                <Checkbox.Group options={options} defaultValue={['Apple']} onChange={this.onChange} />
            </div>
    )}
}


export default DashboardFilter;
