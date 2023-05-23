import React, { useEffect, useRef } from "react";

const Test = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    let localStream;
    let remoteStream;
    let peerConnection;

    let constraints = {
        video: {
            width: { min: 640, ideal: 1920, max: 1920 },
            height: { min: 480, ideal: 1080, max: 1080 },
        },
        audio: true,
    };

    let token = null;

    const servers = {
        iceServers: [
            {
                urls: ["stun:stun.1.google.com:19302", "stun:stun2.1.google.com:19302"],
            },
        ],
    };

    useEffect(() => {
        const startVideoChat = async () => {
            try {
                // Get local video stream
                localStream = await navigator.mediaDevices.getUserMedia(constraints);
                localVideoRef.current.srcObject = localStream;

                // Create peer connection
                peerConnection = new RTCPeerConnection(servers);

                remoteStream = new MediaStream();
                remoteVideoRef.current.srcObject = remoteStream;

                // Add local stream to peer connection
                localStream.getTracks().forEach(track => {
                    peerConnection.addTrack(track, localStream);
                });

                // Set up event handlers for peer connection

                // Handle remote stream
                peerConnection.ontrack = event => {
                    event.streams[0].getTracks().forEach(track => {
                        remoteStream.addTrack(track);
                    });
                    // const remoteStream = event.streams[0]
                    // remoteVideoRef.current.srcObject = remoteStream;
                };

                // Handle ICE candidate
                peerConnection.onicecandidate = async event => {
                    if (event.candidate) {
                        // Send the ICE candidate to the remote peer
                    }
                };

                // Handle negotiation needed event
                peerConnection.onnegotiationneeded = async () => {
                    try {
                        // Create offer
                        const offer = await peerConnection.createOffer();
                        await peerConnection.setLocalDescription(offer);
                        console.log("offer: ", offer);

                        // Send the offer to the remote peer
                    } catch (error) {
                        console.error("Error creating offer:", error);
                    }
                };

                // Handle signaling from the remote peer

                // Handle answer from the remote peer
                const handleAnswer = async answer => {
                    const remoteDescription = new RTCSessionDescription(answer);
                    await peerConnection.setRemoteDescription(remoteDescription);
                };

                // Handle ICE candidates from the remote peer
                const handleCandidate = async candidate => {
                    try {
                        await peerConnection.addIceCandidate(candidate);
                    } catch (error) {
                        console.error("Error adding ICE candidate:", error);
                    }
                };

                // Connect to signaling server and listen for messages
            } catch (error) {
                console.error("Error accessing media devices:", error);
            }
        };

        startVideoChat();

        // Cleanup function
        return () => {
            // Close peer connection and release media resources
            if (peerConnection) {
                peerConnection.close();
            }
            if (localStream) {
                localStream.getTracks().forEach(track => {
                    track.stop();
                });
            }
        };
    }, []);

    return (
        <div className="grid grid-cols-2 overflow-hidden h-screen">
            <video ref={localVideoRef} autoPlay playsInline className="bg-slate-700 w-full h-full object-cover" />
            <video ref={remoteVideoRef} autoPlay playsInline className="bg-black w-full h-full object-cover" />
        </div>
    );
};

export default Test;
