/* eslint-disable */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ModalWrapper from './ModalWrapper';
import { useAppDispatch } from '../../../context/context';

const validations = [
  {
    title: 'Add a title',
    name: 'Title',
    validated: false,
  },
  {
    title: 'Add a short description.',
    label: 'Description',
    validated: false,
  },
  {
    title: 'Choose a meeting type.',
    name: 'Title',
    validated: false,
  },
  {
    title: 'If you want, you can add a some goal or topic you have to discuss!',
    name: 'Title',
    validated: false,
  },
  {
    title: 'Set a date and time when this meeting will start',
    name: 'Title',
    validated: false,
  },
  {
    title: 'Invite people - at least one',
    name: 'Title',
    validated: false,
  },
];

const CreateMeetingModal = (props) => {
  const history = useHistory();
  const [forceUpdate] = useState();
  const dispatch = useAppDispatch();
  const { handleClose } = props;
  // const meetingCode = useSelector((state) => state.meeting?.code);

  // useEffect(() => {
  //     forceUpdate({});

  //     if (meetingCode) {
  //         // Check its not null
  //         history.push(`/room/${meetingCode}`);
  //     }
  // }, [history, meetingCode]);

  return (

    <ModalWrapper
      visible={false}
      mask={false}
      onOk={() => {}}
      clss="create-meeting"
      right
    >
      <div className="create-infos">
        <div className="close-button" onClick={() => handleClose(dispatch)}>
          <span>Close</span>
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
            {validations.map(({ validated, title }, _index) => (
              <li key={_index}>
                <span className={`icon ${validated ? 'ico-tick-mark true' : 'ico-exclamation-tringle false'}`} />
                <span className="title">{title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="tips">
          *Tip for you: Did you know that, Cian is a fucker? You can call him a fucker all the time!
        </div>
      </div>
      <div className="create-content">
        content here
      </div>
    </ModalWrapper>
  );
};

export default CreateMeetingModal;
