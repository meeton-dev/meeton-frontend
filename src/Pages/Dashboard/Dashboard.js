import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNav from '../../Components/TopNav/TopNav';
import SideNav from '../../Components/Common/SideNav';
import DashboardMain from '../../Components/Dashboard/DashboardMain';
import DashboardExtra from '../../Components/Dashboard/DashboardExtra';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(this.props);
        return (
            <section className='main dashboard'>
                <div className="content-left">
                    <SideNav />
                </div>
                <div className="content">
                    <TopNav />
                    <div className="wrapper">
                        <DashboardMain {...this.props} />
                        {/* <DashboardExtra /> */}
                    </div>
                </div>
            </section>
    )}
}


function mapStateToProps({ }) { return {} }

export default connect(mapStateToProps, {})(Dashboard);