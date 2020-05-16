import reduceReducers from "reduce-reducers";
import meetingReducers from "./meetingReducers";
import modalReducers from "./modalReducers";

export default reduceReducers(
    meetingReducers,
    modalReducers
);
