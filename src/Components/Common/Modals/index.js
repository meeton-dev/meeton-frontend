import React, { useRef, useEffect, useState } from "react";

const MtnModal = (props) => {
    console.log(props);
    const { visible, mask} = props;
  return (
      <>
        <div className={`mtnModal onSide ${visible ? 'visible' : ''}`}>
            <div onClick={() => props.onCancel()} className={`mtnModal-mask ${mask ? '' : 'transparent'}`} />
            <div className={`mtnModal-wrapper`}>
                {/* <div onClick={() => props.onCancel()}>close</div> */}
                {props.children}
            </div>
        </div>
      </>
  );
};

export default MtnModal;
