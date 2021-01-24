import React, { useRef, useEffect, useState } from "react";
import DashboardFilter from "./DashboardFilter/DashboardFilter";
import DashboardMeetingBox from "./DashboardMeetingBox/DashboardMeetingBox";
import groupBy from 'lodash/groupBy'
import Moment from 'react-moment';
import moment from 'moment';

const typeArr = ["Scheduled", "Ad-hoc", "Scheduled timed"];

function randomTime(start, end) {
  // get the difference between the 2 dates, multiply it by 0-1, 
  // and add it to the start date to get a new date 
  var diff =  end.getTime() - start.getTime();
  var new_diff = diff * Math.random();
  var date = new Date(start.getTime() + new_diff);
  return date;
}

const randomize = () => {
  let meetings = [];
  for (let i = 0; i < 50; i++) {
    const d = randomTime(new Date("08-10-2020 10:30"), new Date("08-15-2020 02:10"));
    const meeting = {
      type: typeArr[Math.floor(Math.random() * typeArr.length)],
      users:   Math.floor(Math.random() * 25) + 2,
      visible: Math.floor(Math.random() * 2),
      date: moment(d).format('MM-DD-YYYY'),
      date_extended: d
    }
    meetings.push(meeting);
  }
  return meetings;
}

const DashboardMain = () => {
  const fakeMeetings = randomize();
  const test = groupBy(fakeMeetings, 'date');

console.log(test);
  return (
    <div className="dashboard-main">
      <DashboardFilter />
      <div className="meetings-store-wrapper">
        <div className="meetings-list-scroll">
          {Object.entries(test).map((e, i) => {
              return (
                <div key={i} >
                  {/* <h1>{e[0]}</h1> */}
                  <div className="meetings-list-section">
                    {e[1].map((x, i) => {
                      return (
                        <DashboardMeetingBox
                          key={i}
                          data={x}
                        />
                      );
                    })}
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
