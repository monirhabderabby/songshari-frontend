/* eslint-disable react-hooks/exhaustive-deps */
import {useState,useEffect} from "react"
// components

// css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MasterRoute from "./route/MasterRoute";
import { useGetProfileDetailsWIthAuthQuery } from "./Redux/features/userInfo/userApi";
import { useCreateOrUpdateSocketInfoMutation } from "./Redux/features/vedioChat/userSocketInfo";
import socket from "./assets/utilities/socket/socketObject";

function App() {
  const [socketId, setSocketId] = useState("");
  const [updateSocketInfo] =
    useCreateOrUpdateSocketInfoMutation();
  const { data } = useGetProfileDetailsWIthAuthQuery();

  socket.on("me", (id) => {
    setSocketId(id);
  });

  useEffect(() => {
    if (data?._id && socketId) {
      updateSocketInfo({ user: data._id, socketId });
    }
  }, [socketId, data]);
  return <MasterRoute />;
}

export default App;
