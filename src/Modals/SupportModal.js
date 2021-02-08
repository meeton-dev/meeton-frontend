import React, { /* useRef, useEffect, useState  */} from "react";
// import { Link, useHistory } from "react-router-dom";
import ModalWrapper from './ModalWrapper';
// import { Button } from "antd";

// const validations = [
//     { title: "Add a title", validated: false },
//     { title: "Add a short description.", validated: false },
//     { title: "Choose a meeting type.", validated: false },
//     { title: "If you want, you can add a some goal or topic you have to discuss!", validated: false },
//     { title: "Set a date and time when this meeting will start", validated: false },
//     { title: "Invite people - at least one", validated: false },
//   ];
  
const SupportModal = () => {

    // const history = useHistory();
    // const dispatch = useDispatch();
  
    // const meetingCode = useSelector((state) => state.meeting?.code);
  
    // useEffect(() => {
    //   if (meetingCode) {
    //     // Check its not null
    //     history.push(`/room/${meetingCode}`);
    //   }
    // }, [history, meetingCode]);
  
    return (

        <ModalWrapper
            visible={false}
            mask={false}
            // onOk={() => hideModal}
            clss={'support'}
            bottom
        >
            <div className="create-content">
                help blablabla
            </div>
        </ModalWrapper>
    );
  };
  
export default SupportModal;
  