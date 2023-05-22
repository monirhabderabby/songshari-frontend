import React, { useEffect, useRef } from "react";

const Test = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    let localStream;
    let peerConnection;

    useEffect(() => {
        const startVideoChat = async () => {
            try {
                // Get local video stream
                localStream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
                localVideoRef.current.srcObject = localStream;

                // Create peer connection
                peerConnection = new RTCPeerConnection();

                // Add local stream to peer connection
                localStream.getTracks().forEach(track => {
                    peerConnection.addTrack(track, localStream);
                });

                // Set up event handlers for peer connection

                // Handle remote stream
                peerConnection.ontrack = event => {
                    const remoteStream = event.streams[0];
                    remoteVideoRef.current.srcObject = remoteStream;
                };

                // Handle ICE candidate
                peerConnection.onicecandidate = event => {
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
        <div>
            <video ref={localVideoRef} autoPlay muted />
            <video ref={remoteVideoRef} autoPlay />
        </div>
    );
};

export default Test;
