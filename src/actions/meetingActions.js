import { createAction } from "redux-actions";
import axios from "axios";
import { socket } from "../services/socketHandlers";

const joinMeetingRequest = createAction("JOIN_MEETING_REQUEST");
const joinMeetingSuccess = createAction("JOIN_MEETING_SUCCESS");
const joinMeetingFailure = createAction("JOIN_MEETING_FAILURE");

const createMeetingRequest = createAction("CREATE_MEETING_REQUEST");
const createMeetingSuccess = createAction("CREATE_MEETING_SUCCESS");
const createMeetingFailure = createAction("CREATE_MEETING_FAILURE");

const joinMeeting = (code) => async (dispatch) => {
  try {
    dispatch(joinMeetingRequest());
    socket.send("join", { code });
    dispatch(joinMeetingSuccess());
  } catch {
    dispatch(joinMeetingFailure());
  }
};

const createMeeting = (code) => async (dispatch) => {
  try {
    dispatch(createMeetingRequest());
    const response = await axios.post("http://localhost:3001/meetings");
    console.log(response.data);
    dispatch(createMeetingSuccess(response.data));
  } catch (err) {
    console.error(err);
    dispatch(createMeetingFailure());
  }
};

export default { joinMeeting, createMeeting };
