import { handleActions } from "redux-actions";
import { produce } from "immer";

const initialState = {
  modal: {
    type: null,
    mask: true
  }
}

const modalReducers = handleActions(
  {
    MODAL_VISIBILITY: produce((state, action) => {
        return {
          modal: {
            type: action.payload.type,
            mask: action.payload.mask
          }
        }
    })
  },
  initialState
);

export default modalReducers;
