import React, { useRef, useEffect, useState } from "react";
import DashboardFilter from "./Parts/DashboardFilter";
import DashboardMeetingBox from "./Parts/DashboardMeetingBox";

const typeArr = ["Scheduled", "Ad-hoc", "Scheduled timed"];

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <DashboardFilter />
      <div className="meetings-store-wrapper">
        <div className="meetings-list-scroll">
          {[...Array(40)].map((e, i) => {
            return (
              <DashboardMeetingBox
                key={i}
                data={typeArr[Math.floor(Math.random() * typeArr.length)]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
