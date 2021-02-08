import Item from "antd/lib/list/Item";
import React, { useRef, useEffect, useState } from "react";

const DashboardGeneralBox = (props) => {
  const {icon, content} = props;
  return (
    <div className="box">
      <div className="box-top">
        <span className={icon ? icon : "icon-exclamation-tringle"} />
      </div>
      <div>{content ? content : 'empty'}</div>
    </div>
  );
};

export default DashboardGeneralBox;
