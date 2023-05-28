import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
// import copy from "clipboard-copy";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AudioAvatar from "./AudioAvatar";
import MainButtons from "./MainButtons";
import MovableComponent from "./MovableComponent";
import TopLeftIntro from "./TopLeftIntro";
import TopRightButtons from "./TopRightButtons";
// import MyMobileVideo from "./MyMobileVideo";
import { useParams } from "react-router";
import SimplePeer from "simple-peer";
import { io } from "socket.io-client";
import { VideoCallClipboard } from "./clipboard/VideoCallClipboard";

const bgColor = "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]";
const VideoCall = () => {
    const socket = io.connect("http://localhost:4000");
    const res = useSelector(state => state.persistedReducer.userInfo.userInfo);
    let profile = res?.data ? res.data.user : res?.user;
    const [showBottomRightVideo, setShowBottomRightVideo] = useState(true);
    const [video, setVideo] = useState(true);
    const [audio, setAudio] = useState(true);
    // const [peer, setPeer] = useState(null);
    const [stream, setStream] = useState(null);
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [idToCall, setIdToCall] = useState("");
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");
    const videoRef = useRef(null);
    const myVideoRef = useRef(null);
    const myMobileVideoRef = useRef(null);
    const connectionRef = useRef(null);
    const { id } = useParams();
    let peer;

    //sturn server
    const configuration = {
        iceServers: [
            {
                urls: ["stun:stun.l.google.com:19302", "stun:stun2.l.google.com:19302"],
            },
        ],
    };

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: video, audio: audio }).then(stream => {
            setStream(stream);
            // videoRef.current.srcObject = stream;
            myVideoRef.current.srcObject = stream;
            myMobileVideoRef.current.srcObject = stream;
        });
        peer = new SimplePeer({
            initiator: true,
            trickle: false,
            stream: stream,
            config: configuration,
        });
        socket.emit("addUser", profile._id);
        socket.emit("addUser", id);
        // socket.on("me", (id) => {
        //   setMe(id)
        // })

        socket.on("callUser", data => {
            setReceivingCall(true);
            console.log(data);
            setCaller(data.from);
            // setName(data.name)
            setCallerSignal(data.signal);
        });
        peer.on("signal", data => {
            socket.emit("callUser", {
                userToCall: id,
                signalData: data,
                from: profile._id,
                //  name: name
            });
        });
        peer.on("stream", stream => {
            myVideoRef.current.srcObject = stream;
        });
        socket.on("callAccepted", signal => {
            setCallAccepted(true);
            peer.signal(signal);
        });

        connectionRef.current = peer;

        peer.on("signal", data => {
            socket.emit("answerCall", { signal: data, to: caller });
        });
        peer.on("stream", stream => {
            videoRef.current.srcObject = stream;
        });
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
            </div>
            {!video && <AudioAvatar />}
            <div className={`hidden md:block w-[300px] duration-300 absolute bottom-3 ${showBottomRightVideo ? "right-2" : "-right-[250px]"}`}>
                <div className={`relative`}>
                    <video className=" w-full bg-slate-900 h-36 border-1 border-gray-200 rounded-lg shadow-md" ref={myVideoRef} autoPlay />
                    <button onClick={() => setShowBottomRightVideo(!showBottomRightVideo)} className="absolute top-[42%] left-[10px] duration-300">
                        {showBottomRightVideo ? <ArrowForwardIosIcon style={{ color: "white" }} /> : <ArrowBackIosIcon style={{ color: "white" }} />}
                    </button>
                </div>
            </div>
            <TopRightButtons />
            <TopLeftIntro />
            <MainButtons {...{ audio, setAudio, video, setVideo, bgColor }} />
            {video && <MovableComponent {...{ videoRef: myMobileVideoRef }} />}
            <div className="absolute bottom-6 left-5">
                <VideoCallClipboard />
            </div>
        </div>
    );
};

export default VideoCall;
