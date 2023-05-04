import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
// import copy from "clipboard-copy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MainButtons from "./MainButtons";
import TopRightButtons from "./TopRightButtons";
import MovableComponent from "./MovableComponent";
import socket from "./../../../assets/utilities/socket/socketObject"
import TopLeftIntro from "./TopLeftIntro";
import AudioAvatar from "./AudioAvatar";
// import MyMobileVideo from "./MyMobileVideo";
import { useParams } from "react-router";
import { useGetSocketInfoByIdQuery } from "../../../Redux/features/vedioChat/userSocketInfo";

const bgColor =
  "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]";
const VideoCall = () => {
  
  const [showBottomRightVideo, setShowBottomRightVideo] = useState(true);
  const [video, setVideo] = useState(true);
  const [audio, setAudio] = useState(false);
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const { id } = useParams();
  const { data } = useGetSocketInfoByIdQuery(id);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket.on("me", (id) => {
      console.log("My socket id:",id)
      setMe(id);
    });

    socket.on("callUser", (data) => {
      console.log(data, "some one is calling")
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };



  return (
    <div className=" overflow-hidden flex relative flex-col items-center justify-center w-screen h-screen bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">
      <div className="flex flex-col items-center justify-center">
        {video && (
          <video muted className="w-screen h-screen" ref={userVideo} autoPlay />
        )}
      </div>
      {!video && <AudioAvatar />}
      <div
        className={`hidden md:block absolute bottom-3 ${
          showBottomRightVideo ? "right-2" : "-right-44"
        }`}
      >
        <div className={`relative`}>
          <video
            className=" w-auto h-36 border-1 border-gray-200 rounded-lg shadow-md"
            ref={myVideo}
            autoPlay
          />
          <button
            onClick={() => setShowBottomRightVideo(!showBottomRightVideo)}
            className="backdrop-blur-lg w-8 h-8 p-2 flex justify-center items-center rounded-full  absolute left-0 top-[50%] bottom-[50%]"
          >
            {showBottomRightVideo ? (
              <ArrowForwardIosIcon style={{ color: "white" }} />
            ) : (
              <ArrowBackIosIcon style={{ color: "white" }} />
            )}
          </button>
        </div>
      </div>
      <TopRightButtons />
      <TopLeftIntro />
      <MainButtons {...{ audio, setAudio, video, setVideo, bgColor }} />
      {/* {video && <MovableComponent {...{ videoRef: myMobileVideoRef }} />} */}
      <div className="h-12 pb-60">
        {receivingCall && <div>Someone calling</div>}
        <button className="bg-white font-bold p-4 " onClick={() => callUser(data?.data?.socketId)}>
          Call user
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
