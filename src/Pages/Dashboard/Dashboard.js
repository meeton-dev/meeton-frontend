import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import TopNav from '../../Components/TopNav/TopNav';
import SideNav from '../../Components/Common/SideNav';
import DashboardMain from '../../Components/Dashboard/DashboardMain';
import DashboardExtra from '../../Components/Dashboard/DashboardExtra';

const Dashboard = () => {
    const mask = useSelector((state) => state.modal?.mask);

    return (
        <section className={`main dashboard ${mask ? 'modalVisible' : ''}`}>
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