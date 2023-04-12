import React, { useEffect, useRef, useState } from "react";
// import Peer from "simple-peer";
// import copy from "clipboard-copy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MainButtons from "./MainButtons";
import TopRightButtons from "./TopRightButtons";
import MovableComponent from "./MovableComponent";
import TopLeftIntro from "./TopLeftIntro";
// import MyMobileVideo from "./MyMobileVideo";

const bgColor =
  "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]";
const VideoCall = () => {
  const [showBottomRightVideo, setShowBottomRightVideo] = useState(true);
  const [video, setVideo] = useState(true);
  const [audio, setAudio] = useState(true);
  // const [peer, setPeer] = useState(null);
  // const [stream, setStream] = useState(null);
  // const [otherId, setOtherId] = useState("");
  // const [isCopied, setIsCopied] = useState(false);
  const videoRef = useRef(null);
  const myVideoRef = useRef(null);
  const myMobileVideoRef = useRef(null);
  // const
  // const inputRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: video, audio: audio })
      .then((stream) => {
        // setStream(stream);
        videoRef.current.srcObject = stream;
        myVideoRef.current.srcObject = stream;
        myMobileVideoRef.current.srcObject = stream;
      })
      .catch((err) => console.log(err));
  }, [video, audio]);

  // const handleCopy = () => {
  //   const { current } = inputRef;
  //   copy(current.value);
  //   setIsCopied(true);
  //   setTimeout(() => setIsCopied(false), 2000);
  // };

  // const handleConnect = () => {
  //   const p = new Peer({ initiator: true, trickle: false, stream });
  //   p.on("signal", (data) => {
  //     setOtherId(JSON.stringify(data));
  //   });
  //   p.on("stream", (stream) => {
  //     videoRef.current.srcObject = stream;
  //   });
  //   setPeer(p);
  // };

  // const handleOtherIdChange = (e) => {
  //   setOtherId(e.target.value);
  // };

  // const handleJoin = () => {
  //   const p = new Peer({ initiator: false, trickle: false, stream });
  //   p.on("signal", (data) => {
  //     peer.signal(JSON.stringify(data));
  //   });
  //   p.on("stream", (stream) => {
  //     videoRef.current.srcObject = stream;
  //   });
  //   setPeer(p);
  // };

  return (
    <div className=" overflow-hidden flex relative flex-col items-center justify-center w-screen h-screen bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">
      <div className="flex flex-col items-center justify-center">
        <video muted className="w-screen h-screen" ref={videoRef} autoPlay />

        {/* <div className="mt-2 absolute bottom-0">
          <button
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            onClick={handleConnect}
            disabled={!stream || peer}
          >
            Connect
          </button>
          <input
            className="px-4 py-2 text-gray-800 border-2 border-gray-200 rounded-lg"
            type="text"
            value={otherId}
            onChange={handleOtherIdChange}
            placeholder="Other peer ID"
            disabled={peer}
          />
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
            onClick={handleJoin}
            disabled={!stream || peer || !otherId}
          >
            Join
          </button>
        </div> */}
      </div>
      <div className="hidden md:block absolute bottom-3 right-2">
        <div className={`relative -right-${showBottomRightVideo ? "0" : "44"}`}>
          <video
            className=" w-52 h-auto border-1 border-gray-200 rounded-lg shadow-md"
            ref={myVideoRef}
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
      {/* <div className="flex flex-col items-center absolute bottom-10">
        <input
          className="px-4 py-2 mb-2 text-gray-800 border-2 border-gray-200 rounded-lg"
          type="text"
          value={otherId}
          readOnly
          ref={inputRef}
        />
        <button
          className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
          onClick={handleCopy}
        >
          {isCopied ? "Copied!" : "Copy ID"}
        </button>
      </div> */}
      <TopRightButtons />
      <TopLeftIntro />
      <MainButtons {...{ audio, setAudio, video, setVideo, bgColor }} />
      {video && <MovableComponent {...{ videoRef: myMobileVideoRef }} />}
    </div>
  );
};

export default VideoCall;
