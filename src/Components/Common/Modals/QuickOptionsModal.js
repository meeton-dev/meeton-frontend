import React from 'react';
import ModalWrapper from './ModalWrapper';

const QuickOptionsModal = () => (

  <ModalWrapper
    visible={false}
    mask={false}
    onOk={() => {}}
    clss="quick-options"
    right
  >
    <div className="create-content">
      quick options
    </div>
  </ModalWrapper>
);

export default QuickOptionsModal;
