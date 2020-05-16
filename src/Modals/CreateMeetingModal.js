import React, { useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from './ModalWrapper';
import actions from "../actions";
import { Button } from "antd";
import { hideModal } from "../Modals";
const { meetingActions, modalActions } = actions;

const validations = [
    { title: "Add a title", validated: false },
    { title: "Add a short description.", validated: false },
    { title: "Choose a meeting type.", validated: false },
    { title: "If you want, you can add a some goal or topic you have to discuss!", validated: false },
    { title: "Set a date and time when this meeting will start", validated: false },
    { title: "Invite people - at least one", validated: false },
  ];
  
const CreateMeetingModal = () => {

    const history = useHistory();
    const dispatch = useDispatch();
  
    const meetingCode = useSelector((state) => state.meeting?.code);
  
    useEffect(() => {
      if (meetingCode) {
        // Check its not null
        history.push(`/room/${meetingCode}`);
      }
    }, [history, meetingCode]);
  
    return (

        <ModalWrapper
            visible={modalActions}
            mask={false}
            onOk={() => hideModal}
            clss={'create-meeting'}
            right
        >
            <div className="create-infos">
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
            </div>
            <div className="create-content">
            <Button
                type="primary"
                size="small"
                onClick={() => dispatch(meetingActions.createMeeting())}
            >
                Create meeting
            </Button>
            </div>
        </ModalWrapper>
    );
  };
  
export default CreateMeetingModal;
  