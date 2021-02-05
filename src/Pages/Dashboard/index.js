import React from 'react';
import DashboardTop from '../../Components/Dashboard/DashboardTop';
import DashboardCallStatsBox from '../../Components/Dashboard/DashboardCallStatsBox';
import DashboardFavouritesBox from '../../Components/Dashboard/DashboardFavouritesBox';
import DashboardFilesBox from '../../Components/Dashboard/DashboardFilesBox';
import DashboardPeoplesBox from '../../Components/Dashboard/DashboardPeoplesBox';
import DashboardScheduleBox from '../../Components/Dashboard/DashboardScheduleBox';
import DashboardSundriesBox from '../../Components/Dashboard/DashboardSundriesBox';
import DashboardTimeSpentBox from '../../Components/Dashboard/DashboardTimeSpentBox';

const Dashboard = () => {
// modalVisible
    return (
        <section className='dashboard'>
            <DashboardTop />
            <div className="boxes">
                <DashboardScheduleBox />
                <DashboardFilesBox />
                <DashboardCallStatsBox />
                <DashboardFavouritesBox />
                <DashboardPeoplesBox />
                <DashboardSundriesBox />
                <DashboardTimeSpentBox />
            </div>
        </section>
    );
};


export default Dashboard