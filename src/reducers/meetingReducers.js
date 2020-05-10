import { handleActions } from "redux-actions";
import { produce } from "immer";

const initialState = {
  meeting: {
    code: "",
  },
};

const meetingReducers = handleActions(
  {
    CREATE_MEETING_SUCCESS: produce((state, action) => {
      console.log(state);
      state.meeting = action.payload.meeting;
    }),
  },
  initialState
);

export default meetingReducers;
