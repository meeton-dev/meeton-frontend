import React, { useRef, useEffect, useState } from "react";

const ModalWrapper = (props) => {
  const { top, right, bottom, left, clss, mask} = props;
  return (
    <div className={`mtnModal visible ${clss ? clss : ''} ${top ? 'on-top' : ''} ${right ? 'on-right' : ''} ${bottom ? 'on-bottom' : ''} ${left ? 'on-left' : ''}`}>
        <div  className={`mtnModal-mask ${mask ? '' : 'transparent'}`} />
        <div className={`mtnModal-wrapper`}>
            {props.children}
        </div>
    </div>
  );
};

export default ModalWrapper;
