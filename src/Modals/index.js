import React from "react";
import CreateMeetingModal from './CreateMeetingModal'
import QuickOptionsModal from './QuickOptionsModal'
import SupportModal from './SupportModal'

const MODAL_COMPONENTS = {
  'CREATE_MEETING': CreateMeetingModal,
  'QUICK_OPTIONS': QuickOptionsModal,
  'SUPPORT': SupportModal,
  /* other modals */
}
// export const showModal = (type, mask) => store.dispatch(modalActions.handleModal({type: type, mask: mask}));
// export const hideModal = () => store.dispatch(modalActions.handleModal({type: null, mask: false}));

const UniModal = () => {
  // const type = useSelector((state) => state.modal?.type);
  // const Modal = MODAL_COMPONENTS[type]
  // return type ? <Modal /> : null
  return null
}

export default UniModal;