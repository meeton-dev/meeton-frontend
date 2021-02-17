import React, { useRef, useEffect, useState } from "react";

const options = [
  { label: "Scheduled", value: "1" },
  { label: "Timed", value: "2" },
  { label: "Ad-hoc", value: "3" },
];

const MeetingsFilter = () => {
  return (
    <div className="dashboard-filters">
      <button type="primary" size="small" onClick={() => {}}>
        Create meeting
      </button>
    </div>
  );
};

export default MeetingsFilter;
