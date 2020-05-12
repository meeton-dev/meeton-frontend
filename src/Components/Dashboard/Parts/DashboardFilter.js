import React, { useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../actions";
import { DatePicker, Checkbox } from "antd";
import { Modal, Button } from "antd";
import MtnModal from "../../Common/Modals";
const { meetingActions } = actions;

const options = [
  { label: "Scheduled", value: "1" },
  { label: "Timed", value: "2" },
  { label: "Ad-hoc", value: "3" },
];

const DashboardFilter = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const meetingCode = useSelector((state) => state.meeting?.code);

  // Create meeting modal toggle
  const [modalVisible, setModalVisibility] = useState(false);
  const toggleCreateModal = () => setModalVisibility(!modalVisible);

  useEffect(() => {
    if (meetingCode) {
      // Check its not null
      history.push(`/room/${meetingCode}`);
    }
  }, [history, meetingCode]);

  return (
    <div className="dashboard-filters">
      <DatePicker />
      <Checkbox.Group options={options} defaultValue={["Apple"]} />
      <Button type="primary" size="small" onClick={toggleCreateModal}>
        Create meeting
      </Button>
      <MtnModal
        visible={modalVisible}
        mask={false}
        onOk={() => dispatch(meetingActions.createMeeting())}
        onCancel={toggleCreateModal}
      >
        <div className="create-infos">
          <div>
            <span onClick={toggleCreateModal}>Back</span>
          </div>
          <div className="head">
            <h1>It's time to create a new meeting!</h1>
            <p>
              Before you start don't forget some important thing, what could
              help to specify each meetings you creating!
            </p>
          </div>
          <div className="validations">
            <h3>Please check if you have the followings:</h3>
            <ul>
              <li>Add a title</li>
              <li>Add a short description.</li>
              <li>Choose a meeting type!</li>
              <li>
                If you want, you can add a some goal and topic you have to
                discuss!
              </li>
              <li>Give a date and time when this meeting will start</li>
              <li>Invite people</li>
            </ul>
          </div>
          <div className="illustration" />
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
      </MtnModal>
    </div>
  );
};

export default DashboardFilter;
