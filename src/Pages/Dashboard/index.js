import React from 'react';
import DashboardTop from '../../Components/Dashboard/DashboardTop';
import DashboardCallStatsBox from '../../Components/Dashboard/DashboardCallStatsBox';
import DashboardFavouritesBox from '../../Components/Dashboard/DashboardFavouritesBox';
import DashboardFilesBox from '../../Components/Dashboard/DashboardFilesBox';
import DashboardPeoplesBox from '../../Components/Dashboard/DashboardPeoplesBox';
import DashboardScheduleBox from '../../Components/Dashboard/DashboardScheduleBox';
import DashboardSundriesBox from '../../Components/Dashboard/DashboardSundriesBox';
import DashboardTimeSpentBox from '../../Components/Dashboard/DashboardTimeSpentBox';
import DashboardGeneralBox from '../../Components/Dashboard/DashboardGeneralBox';

const Dashboard = () => {
// modalVisible
    return (
        <section className='dashboard'>
            <DashboardTop />
            <div className="boxes">
                <DashboardGeneralBox
                    icon='icon-clock'
                    content={<DashboardScheduleBox />} />
                <DashboardGeneralBox
                    icon='icon-file'
                    content={<DashboardFilesBox />} />
                <DashboardGeneralBox
                    icon='icon-phone'
                    content={<DashboardCallStatsBox />} />
                <DashboardGeneralBox
                    icon='icon-star'
                    content={<DashboardFavouritesBox />} />
                <DashboardGeneralBox
                    icon='icon-users'
                    content={<DashboardPeoplesBox />} />
                <DashboardGeneralBox
                    icon='icon-clock'
                    content={<DashboardTimeSpentBox />} />
                <DashboardGeneralBox
                    icon='icon-files-stack'
                    content={<DashboardSundriesBox />} />
            </div>
        </section>
    );
};


export default Dashboard