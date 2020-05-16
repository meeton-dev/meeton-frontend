import React from "react";
import { useSelector } from "react-redux";
import CreateMeetingModal from './CreateMeetingModal'
import QuickOptionsModal from './QuickOptionsModal'
import SupportModal from './SupportModal'
import actions from "../actions";
import store from "../store";
const { modalActions } = actions;

const MODAL_COMPONENTS = {
  'CREATE_MEETING': CreateMeetingModal,
  'QUICK_OPTIONS': QuickOptionsModal,
  'SUPPORT': SupportModal,
  /* other modals */
}
export const showModal = (type, mask) => store.dispatch(modalActions.handleModal({type: type, mask: mask}));
export const hideModal = () => store.dispatch(modalActions.handleModal({type: null, mask: false}));

const UniModal = () => {
  const type = useSelector((state) => state.modal?.type);
  const Modal = MODAL_COMPONENTS[type]
  return type ? <Modal /> : null
}

export default UniModal;