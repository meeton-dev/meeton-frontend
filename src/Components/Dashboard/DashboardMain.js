import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardFilter from "./Parts/DashboardFilter";
import DashboardMeetingBox from "./Parts/DashboardMeetingBox";
import actions from "../../actions";

const { meetingActions } = actions;

const typeArr = ["Scheduled", "Ad-hoc", "Scheduled timed"];

const DashboardMain = () => {
  const dispatch = useDispatch();
  const meetingCode = useSelector((state) => state.meeting?.code);

  return (
    <div className="dashboard-main">
      <DashboardFilter />
      <button onClick={() => dispatch(meetingActions.createMeeting())}>
        Instant Create Meeting
      </button>
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
