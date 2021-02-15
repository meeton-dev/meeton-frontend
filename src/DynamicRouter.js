import React, { Component} from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Meetings from "./Pages/Meetings";
import Calendar from "./Pages/Calendar";
import Latest from "./Pages/Latest";
import Starred from "./Pages/Starred";
import Importants from "./Pages/Importants";
import Notes from "./Pages/Notes";
import Files from "./Pages/Files";
import MyGroup from "./Pages/MyGroup";
import Settings from "./Pages/Settings";
import MeetingCall from "./Pages/meetingCall";
import Meeting from "./Components/meetingCall/Meeting";
import Lobby from "./Pages/Lobby/Lobby";

export const mtnRoutes = [
  { 
    title:'nav.dashboard',
    icon:'icon-dashboard',
    path: "/",
    id: 1,
    component: Dashboard
  },
  {
    title:'nav.meetings',
    icon:'icon-comments',
    path: "/meetings",
    id: 2,
    component: Meetings
  },
  {
    title:'nav.calendar',
    icon:'icon-ui-calendar',
    path: "/calendar",
    id: 3,
    component: Calendar
  },
  {
    title:'nav.latest',
    icon:'icon-clock',
    path: "/latest",
    id: 4,
    component: Latest
  },
  {
    title:'nav.starred',
    icon:'icon-star',
    path: "/starred",
    id: 5,
    component: Starred
  },
  {
    title:'nav.important',
    icon:'icon-exclamation',
    path: "/importants",
    id: 6,
    component: Importants
  },
  {
    title:'nav.notes',
    icon:'icon-file',
    path: "/notes",
    id: 7,
    component: Notes
  },
  {
    title:'nav.files',
    icon:'icon-files-stack',
    path: "/files",
    id: 8,
    component: Files
  }
];

export const mtnOptionsRoutes = [
  {
    title:'nav.my_group',
    icon:'icon-users',
    path: "/my-group",
    id: 9,
    component: MyGroup
  },
  {
    title:'nav.settings',
    icon:'icon-support-faq',
    path: "/settings",
    id: 10,
    component: Settings
  },
  { path: "/lobby/:code", component: Lobby },
  { path: "/meeting/:code", component: MeetingCall },
  { path: "/room/:roomID", component: Meeting },
];


class DynamicRouter extends Component {
  render() {
    // const { permissions } = this.props;
    return (
      <Switch>
        {mtnRoutes.map((route, i) => (
          <Route exact path={route.path} component={route.component} key={i} />
        ))}
        {mtnOptionsRoutes.map((route, i) => (
          <Route exact path={route.path} component={route.component} key={i} />
        ))}
      </Switch>
    );
  }
}

export default DynamicRouter;
