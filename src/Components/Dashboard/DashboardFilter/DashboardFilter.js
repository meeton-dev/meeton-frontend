import React, { useRef, useEffect, useState } from "react";
import { DatePicker, Checkbox } from "antd";
import { Button } from "antd";

const options = [
  { label: "Scheduled", value: "1" },
  { label: "Timed", value: "2" },
  { label: "Ad-hoc", value: "3" },
];

const DashboardFilter = () => {
  return (
    <div className="dashboard-filters">
      <DatePicker />
      <Checkbox.Group options={options} defaultValue={["Apple"]} />
      <Button type="primary" size="small" onClick={() => {}}>
        Create meeting
      </Button>
   
    </div>
  );
};

export default DashboardFilter;
