import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNav from '../../Components/TopNav/TopNav';
import DashboardNav from '../../Components/Dashboard/DashboardNav';
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
                    <DashboardNav />
                </div>
                <div className="content">
                    <TopNav />
                    <div className="wrapper">
                        <DashboardMain {...this.props} />
                        <DashboardExtra />
                    </div>
                </div>
            </section>
    )}
}


function mapStateToProps({ }) { return {} }

export default connect(mapStateToProps, {})(Dashboard);