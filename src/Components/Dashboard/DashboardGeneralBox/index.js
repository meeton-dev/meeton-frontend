import React from 'react';

const DashboardGeneralBox = (props) => {
  // eslint-disable-next-line react/prop-types
  const { icon, content } = props;
  return (
    <div className="box">
      <div className="box-top">
        <span className={icon || 'icon-exclamation-tringle'} />
      </div>
      <div>{content || 'empty'}</div>
    </div>
  );
};

export default DashboardGeneralBox;
