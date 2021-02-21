import React, { Component } from 'react';
import LobbyFiles from './LobbyFiles';
import { Link } from 'react-router-dom'
import setupSocketHandlers, { socket } from "../../services/socketHandlers";

class LobbyMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { code } = this.props.match.params;
        console.log(this.props.match.params);
        return (
            <div className="lobby-main">
                <button type="primary" size='small'>
                    <Link to={`/meeting/${code}`}>
                        Enter meeting 
                    </Link>
                </button>
                {/* <LobbyFiles /> */}
            </div>
    )}
}


export default LobbyMain;
