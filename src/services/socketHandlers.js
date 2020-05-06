import io from "socket.io-client";

export const socket = io("http://localhost:3001");

export default (
  socket,
  code,
  peerConnections,
  setPeerConnections,
  remoteSrcObjs,
  setRemoteSrcObjs
) => {
  socket.on("connect", () => socket.send("join", code));
  socket.on("join", (data) => console.log("New client: ", data));
  socket.on("call-failed", (data) => console.log("FAILED"));
  socket.on("peer-list", ({ peers }) => {
    callMeeting(
      socket,
      peers,
      code,
      peerConnections,
      setPeerConnections,
      remoteSrcObjs,
      setRemoteSrcObjs
    );
  });
  socket.on("receiving-call", (data) =>
    answerCall(
      socket,
      data,
      peerConnections,
      setPeerConnections,
      remoteSrcObjs,
      setRemoteSrcObjs
    )
  );
  socket.on("call-answered", (data) =>
    handleAnsweredCall(data, peerConnections, setPeerConnections)
  );
};

const callMeeting = async (
  socket,
  peers,
  meetingCode,
  peerConnections,
  setPeerConnections,
  remoteSrcObjs,
  setRemoteSrcObjs
) => {
  console.log(peers, "func");
  await peers.map(async (peerId) => {
    const peerConnection = new RTCPeerConnection();
    peerConnection.ontrack = handleNewPeerTrack(
      remoteSrcObjs,
      setRemoteSrcObjs
    );
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(new RTCSessionDescription(offer));
    socket.send("call", { meetingCode, offer, peerId });
    console.log("SENT CALL");
    setPeerConnections({ ...peerConnections, [peerId]: peerConnection });
  });
};

const answerCall = async (
  ownSocket,
  { offer, socket },
  peerConnections,
  setPeerConnections,
  remoteSrcObjs,
  setRemoteSrcObjs
) => {
  console.log("ANSWERING");
  const peerConnection = new RTCPeerConnection();
  peerConnection.ontrack = handleNewPeerTrack(remoteSrcObjs, setRemoteSrcObjs);
  await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(new RTCSessionDescription(answer));
  setPeerConnections({
    ...peerConnections,
    [socket]: peerConnection,
  });
  ownSocket.send("answer-call", {
    answer,
    socket,
    peerId: ownSocket.id,
  });
};

const handleAnsweredCall = async (
  { peerId, answer },
  peerConnections,
  setPeerConnections
) => {
  console.log("PC2", peerId);
  const peerConnection = peerConnections[peerId];
  if (!peerConnection) return;

  // TODO:  HANDLE ERROR can't set remote description on state stable...
  console.log("NOT STABLE");
  await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
  setPeerConnections({ ...peerConnections, [peerId]: peerConnection });
};

const handleNewPeerTrack = (remoteSrcObjs, setRemoteSrcObjs) => {
  return ({ streams: [stream] }) => {
    setRemoteSrcObjs([...remoteSrcObjs, stream]);
  };
};
