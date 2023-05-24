import React, { useEffect, useRef, useState } from "react";
// import Peer from "simple-peer";
// import copy from "clipboard-copy";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AudioAvatar from "./AudioAvatar";
import MainButtons from "./MainButtons";
import MovableComponent from "./MovableComponent";
import TopLeftIntro from "./TopLeftIntro";
import TopRightButtons from "./TopRightButtons";
// import MyMobileVideo from "./MyMobileVideo";
import { io } from "socket.io-client";
import { useParams } from "react-router";
import SimplePeer from 'simple-peer';

const bgColor = "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]";
const VideoCall = () => {
  const socket = io.connect("http://localhost:4000");

    //
    const [showBottomRightVideo, setShowBottomRightVideo] = useState(true);
    const [video, setVideo] = useState(true);
    const [audio, setAudio] = useState(true);
    // const [peer, setPeer] = useState(null);
    const [stream, setStream] = useState(null);
    const [ me, setMe ] = useState("")
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
    const videoRef = useRef(null);
    const myVideoRef = useRef(null);
    const myMobileVideoRef = useRef(null);
    // const inputRef = useRef(null);
    const { id } = useParams();
    let peer ;

    //sturn server
    const configuration = {
        iceServers: [
            {
                urls: ["stun:stun.l.google.com:19302", "stun:stun2.l.google.com:19302"]
            }
        ]
    };


    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: video, audio: audio })
            .then(stream => {
                setStream(stream);
                videoRef.current.srcObject = stream;
                myVideoRef.current.srcObject = stream;
                myMobileVideoRef.current.srcObject = stream;
    
            })
            socket.on("me", (id) => {
              setMe(id)
            })
        
            socket.on("callUser", (data) => {
              setReceivingCall(true)
              // setCaller(data.from)
              // setName(data.name)
              setCallerSignal(data.signal)
            })
            peer = new SimplePeer({
             initiator: true,
             trickle: false,
             stream: stream
           })
           peer.on("signal", (data) => {
             socket.emit("callUser", {
               userToCall: id,
               signalData: data,
               from: me,
               name: name
             })
           })
           peer.on("stream", (stream) => {
             
               videoRef.current.srcObject = stream
             
           })
           socket.on("callAccepted", (signal) => {
             setCallAccepted(true)
             peer.signal(signal)
           })
        
           // connectionRef.current = peer
        
        
           peer.on("signal", (data) => {
             socket.emit("answerCall", { signal: data, to: caller })
           })
           peer.on("stream", (stream) => {
             videoRef.current.srcObject = stream
           })
    }, [video, audio]);
    


		// peer.signal(callerSignal)
		// connectionRef.current = peer
	
	// const leaveCall = () => {
	// 	setCallEnded(true)
	// 	// connectionRef.current.destroy()
	// }
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
                {video && <video muted className="w-screen h-screen" ref={videoRef} autoPlay />}
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
            {!video && <AudioAvatar />}
            <div className={`hidden md:block absolute bottom-3 ${showBottomRightVideo ? "right-2" : "-right-[250px]"}`}>
                <div className={`relative`}>
                    <video className=" w-auto bg-slate-900 h-36 border-1 border-gray-200 rounded-lg shadow-md" ref={myVideoRef} autoPlay />
                    <button onClick={() => setShowBottomRightVideo(!showBottomRightVideo)} className="absolute top-[42%] left-[10px] duration-300">
                        {showBottomRightVideo ? <ArrowForwardIosIcon style={{ color: "white" }} /> : <ArrowBackIosIcon style={{ color: "white" }} />}
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
