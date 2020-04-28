import React, { Component } from 'react';
import { Avatar } from '../../Components/Common/avatar';

class DashboardExtra extends Component {
    render() {
        return (
            <div className="content-right">
                <div className="upcoming-meetings">
                    Extra things coming here. Online users, offline users, some analytics etc. 
                </div>
                <div className="who-is-here">
                    {[...Array(30)].map((e,i) => {
                        return <div key={i} className="user">
                            <Avatar mini/>
                        </div>
                    })}
                </div>
            </div>
    )}
}


export default DashboardExtra;
