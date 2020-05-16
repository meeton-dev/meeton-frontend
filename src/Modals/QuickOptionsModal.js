import React, { useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from './ModalWrapper';
import actions from "../actions";
import { Button } from "antd";
import { hideModal } from ".";
const { meetingActions, modalActions } = actions;

const QuickOptionsModal = () => {
    return (

        <ModalWrapper
            visible={modalActions}
            mask={false}
            onOk={() => hideModal}
            clss={'quick-options'}
            right
            // onCancel={modalActions}
        >
            {/* <div className="create-infos">
            <div className="close-button">
                <span onClick={hideModal}>Close</span>
            </div>
            <div className="head">
                <h2>It's time to create a new meeting!</h2>
                <p>
                Before you start don't forget some important thing, what could
                help to specify each meetings you creating!
                </p>
            </div>
            <div className="validations">
                <h2>Please check if you have the followings:</h2>
                <ul>
                {validations.map(({validated, title}, _index) => {
                    return(
                    <li key={_index}>
                        <span className={`icon ${validated ? 'ico-tick-mark true' : 'ico-exclamation-tringle false'}`}></span>
                        <span className="title">{title}</span>
                    </li>
                    )
                })}
                </ul>
            </div>
            <div className="tips">
                *Tip for you: Did you know that, Cian is a fucker? You can call him a fucker all the time!
            </div>
            </div> */}
            <div className="create-content">
                quick options
            </div>
        </ModalWrapper>
    );
  };
  
export default QuickOptionsModal;
  