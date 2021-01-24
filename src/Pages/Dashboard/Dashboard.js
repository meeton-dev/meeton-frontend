import React, { Component } from 'react';
import TopNav from '../../Components/TopNav/TopNav';
import SideNav from '../../Components/Common/SideNav';
import DashboardMain from '../../Components/Dashboard/DashboardMain';
import DashboardExtra from '../../Components/Dashboard/DashboardExtra';

const Dashboard = () => {
// modalVisible
    return (
        <section className={`main dashboard `}>
            <div className="content-left">
                <SideNav />
            </div>
            <div className="content">
                <TopNav />
                <div className="wrapper">
                    <DashboardMain />
                    {/* <DashboardExtra /> */}
                </div>
            </div>
        </section>
    );
};


export default Dashboard