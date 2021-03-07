import React, { /* useRef, useEffect, useState  */} from 'react';
// import { Link, useHistory } from "react-router-dom";
import ModalWrapper from './ModalWrapper';

const SupportModal = () => (

  <ModalWrapper
    visible={false}
    mask={false}
            // onOk={() => hideModal}
    clss="support"
    bottom
  >
    <div className="create-content">
      help blablabla
    </div>
  </ModalWrapper>
);
export default SupportModal;
