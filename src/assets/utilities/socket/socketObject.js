import io from "socket.io-client";

const socket = io("http://localhost:4000"); // replace with your server URL
export default socket;