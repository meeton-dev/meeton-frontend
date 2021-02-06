import React, { Component} from "react";
import { Switch, Route } from "react-router-dom";

// import MeetingCall from "./Pages/meetingCall/meetingCall";
// import Meeting from "./Components/meetingCall/Meeting";
import Dashboard from "./Pages/Dashboard";
// import Lobby from "./Pages/Lobby/Lobby";
import Meetings from "./Pages/Meetings";
import Calendar from "./Pages/Calendar";
import Latest from "./Pages/Latest";
import Starred from "./Pages/Starred";
import Importants from "./Pages/Importants";
import Notes from "./Pages/Notes";
import Files from "./Pages/Files";
import MyGroup from "./Pages/MyGroup";
import Settings from "./Pages/Settings";

export const mtnRoutes = [
  { 
    title:'Dashboard',
    icon:'',
    path: "/",
    id: 1,
    component: Dashboard
  },
  {
    title:'Meetings',
    icon:'',
    path: "/meetings",
    id: 2,
    component: Meetings
  },
  {
    title:'Calendar',
    icon:'',
    path: "/calendar",
    id: 3,
    component: Calendar
  },
  {
    title:'Latest',
    icon:'',
    path: "/latest",
    id: 4,
    component: Latest
  },
  {
    title:'Starred',
    icon:'',
    path: "/starred",
    id: 5,
    component: Starred
  },
  {
    title:'Importants',
    icon:'',
    path: "/importants",
    id: 6,
    component: Importants
  },
  {
    title:'Notes',
    icon:'',
    path: "/notes",
    id: 7,
    component: Notes
  },
  {
    title:'Files',
    icon:'',
    path: "/files",
    id: 8,
    component: Files
  }
];

export const mtnOptionsRoutes = [
  {
    title:'MyGroup',
    icon:'',
    path: "/my-group",
    id: 9,
    component: MyGroup
  },
  {
    title:'Settings',
    icon:'',
    path: "/settings",
    id: 10,
    component: Settings
  },
  // { path: "/lobby/:code", component: Lobby },
  // { path: "/meeting/:code", component: MeetingCall },
  // { path: "/room/:roomID", component: Meeting },
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
