import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import MeetingCall from './Pages/meetingCall/meetingCall';
import Dashboard from './Pages/Dashboard/Dashboard';
import Lobby from './Pages/Lobby/Lobby';

const routes = [
    { path: '/', component: Dashboard, },
    { path: '/lobby/:code', component: Lobby },
    { path: '/meeting/:code', component: MeetingCall },

    // { path: '/account', component: AccountPage, permission: 'ACCOUNT_ADMINISTER' },
    // { path: '/test', component: TestPage },
    // { path: '/no-access', component: NoAccessPage },
    // { path: '/404', component: NotFoundPage },
    // { component: NotFoundPage, }
];

class DynamicRouter extends Component {
    render() {
        // const { permissions } = this.props;
        return (
            <Switch>
                {routes.map((route, i) => (
                    <Route exact path={route.path} component={route.component} key={i} />
                ))}
            </Switch>
        );
    }
}

export default DynamicRouter;
