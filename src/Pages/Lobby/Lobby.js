import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopNav from '../../Components/TopNav/TopNav';
import LobbyMain from '../../Components/Lobby/LobbyMain';
import LobbyNav from '../../Components/Lobby/LobbyNav';
import Moment from 'react-moment';

class Lobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section className='main lobby'>
                <div className="content-left">
                    <LobbyNav />
                </div>
                <div className="content">
                    <TopNav />
                    <div className="wrapper">
                        <LobbyMain {...this.props} />
                    </div>
                </div>
            </section>
    )}
}

function mapStateToProps({ }) { return {} }

export default connect(mapStateToProps, {})(Lobby);