import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TopNav from "../../Components/TopNav/TopNav";
// import LobbyMain from "../../Components/Lobby/LobbyMain";
import LobbyNav from "../../Components/Lobby/LobbyNav";
import actions from "../../actions";

const { meetingActions } = actions;

const Lobby = () => {
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    // dispatch(meetingActions.joinMeeting(code));
  }, [code, dispatch]);

  return (
    <section className="main lobby">
      <div className="content-left">
        <LobbyNav />
      </div>
      <div className="content">
        <TopNav />
        <div className="wrapper">
          {/* <LobbyMain {...this.props} /> */}
          {/* WE DONT NEED THIS ATM */}
        </div>
      </div>
    </section>
  );
};

export default Lobby;
