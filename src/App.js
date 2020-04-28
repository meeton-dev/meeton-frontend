import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import MeetingCall from './Pages/meetingCall/meetingCall';
import Main from './Pages/Main/Main';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route component={Main} exact path="/" />
            <Route component={Main} path="/lobby" />
            <Route component={MeetingCall} path="/meeting" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
