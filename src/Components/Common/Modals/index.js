import React, { useEffect } from "react";
import CreateMeetingModal from './CreateMeetingModal'
import QuickOptionsModal from './QuickOptionsModal'
import SupportModal from './SupportModal'
import { useAppState } from "../../../context/context";

const MODAL_COMPONENTS = {
  'CREATE_MEETING': CreateMeetingModal,
  'QUICK_OPTIONS': QuickOptionsModal,
  'SUPPORT': SupportModal,
  /* other modals */
}
export const showModal = async (dispatch, type, mask) => {dispatch({reducer: 'SET_MODAL_VISIBILITY', obj: {type, mask}})};
export const hideModal = async (dispatch) => {dispatch({reducer: 'SET_MODAL_VISIBILITY', obj: {type: null, mask: false}})};

const UniModal = () => {
  const { modal } = useAppState();
  const Modal = MODAL_COMPONENTS[modal.type]

  useEffect(()=>{
    console.log(modal);
    if(modal.type && modal.mask){
      const el = window.document.getElementById('appWrapper');
      el.classList.add('blur');
    } else {
      const el = window.document.getElementById('appWrapper');
      el.classList.remove("blur")
    }
  },[modal]);

  if(modal && modal.type) return <Modal handleClose={hideModal}/>
  return null
}

export default UniModal;