import React, { Component } from 'react';
import LobbyFiles from './LobbyFiles';
import { Button } from 'antd';
import {Link} from 'react-router-dom'

class LobbyMain extends Component {
    render() {
        return (
            <div className="lobby-main">
                <Button type="primary" size='small'>
                    <Link to='/meeting'>
                        Enter meeting 
                    </Link>
                </Button>
                <LobbyFiles />
            </div>
    )}
}


export default LobbyMain;
