import { handleActions } from "redux-actions";
import { produce } from "immer";

const initialState = {
  meeting: {
    code: "",
  },
};

const meetingReducers = handleActions(
  {
    CREATE_MEETING_SUCCESS: produce((action, state) => {
      state.meeting = action.payload.meeting;
    }),
  },
  initialState
);

export default meetingReducers;
