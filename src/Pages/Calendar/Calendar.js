import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import SideNav from "../../Components/Common/SideNav";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);
const events = [
  {
    id: 0,
    title: "Test",
    start: new Date(2020, 4, 29, 9, 0, 0),
    end: new Date(2020, 4, 29, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: "Test 2",
    allDay: true,
    start: new Date(2020, 4, 29, 14, 0, 0),
    end: new Date(2020, 4, 29, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: "Test 3",
    start: new Date(2020, 4, 29, 8, 30, 0),
    end: new Date(2020, 4, 29, 12, 30, 0),
    resourceId: 3,
  },
  {
    id: 11,
    title: "Test 4",
    start: new Date(2020, 4, 30, 7, 0, 0),
    end: new Date(2020, 4, 30, 10, 30, 0),
    resourceId: 4,
  },
];
class CalendarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <section className="main dashboard">
        <div className="content-left">
          <SideNav />
        </div>
        <div className="content">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </section>
    );
  }
}

export default CalendarPage;
