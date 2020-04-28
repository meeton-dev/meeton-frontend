import React, { Component } from 'react';
import MainTop from '../../Components/Main/MainTop';
import DashboardNav from '../../Components/Dashboard/DashboardNav';
import DashboardMain from '../../Components/Dashboard/DashboardMain';
import DashboardExtra from '../../Components/Dashboard/DashboardExtra';

import LobbyMain from '../../Components/Lobby/LobbyMain';
import LobbyNav from '../../Components/Lobby/LobbyNav';
import Moment from 'react-moment';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.home = this.props.location.pathname === '/' ? true : false;
    }

    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    render() {
        console.log(this.props.location.pathname);
        return (
        <section className={`main ${this.props.location.pathname === '/' ? 'dashboard' : 'lobby'}`}>
            {/* <DashboardTop /> */}
            <div className="content-left">
                {this.props.location.pathname === '/' && <DashboardNav />}
                {this.props.location.pathname === '/lobby' && <LobbyNav />}
            </div>
            <div className="content">
                <MainTop />
                <div className="wrapper">
                    {this.props.location.pathname === '/' && 
                        <>
                            <DashboardMain />
                            <DashboardExtra />
                        </>
                    }
                    {this.props.location.pathname === '/lobby' && 
                        <>
                            <LobbyMain />
                        </>
                    }
                </div>
            </div>
        </section>
    )}
}


export default Main;
