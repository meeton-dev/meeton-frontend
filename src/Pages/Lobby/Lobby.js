import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import LobbyMain from "../../Components/Lobby/LobbyMain";
import LobbyNav from "../../Components/Lobby/LobbyNav";


const Lobby = () => {
  const { code } = useParams();


  return (
    <section className='Lobby'>
      LOBBY page
    </section>
  );
};

export default Lobby;
