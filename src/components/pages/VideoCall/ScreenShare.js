import React, { useState, useEffect } from 'react';
import SimplePeer from 'simple-peer';


const ScreenShare = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const peer = new SimplePeer({ initiator: true, trickle: false });

  // When the local stream is ready, add it to the peer connection
  peer.on("signal", (data) => {
    // Send the data to the remote peer using your preferred signaling method (e.g. WebSockets)
  });

  // When the remote stream is ready, set it as the remote stream state variable
  peer.on("stream", (stream) => {
    setRemoteStream(stream);
  });

  // When the peer connection is closed, reset the remote stream state variable
  peer.on("close", () => {
    setRemoteStream(null);
  });

  // Request access to the user's camera and microphone
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      setLocalStream(stream);
      peer.addStream(stream);
    })
    .catch((error) => {
      console.error("Error accessing user media:", error);
    });
  return (
    <div>
      {localStream && <video srcObject={localStream} autoPlay muted />}
      {remoteStream && <video srcObject={remoteStream} autoPlay />}
    </div>
  );
};

export default ScreenShare;
