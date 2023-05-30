import React from "react";
import { Modal } from "antd";
import { Reacthtml5Player } from "../shared/Components/Reacthtml5Player/Reacthtml5Player";

const VideoBioDataContainer = ({ isModalOpen, setModalOpen, videoBio }) => {
  const handlePlay = () => {};
  return (
    <Modal
      open={isModalOpen}
      centered
      footer={null}
      onCancel={() => setModalOpen(false)}
    >
      <Reacthtml5Player
        isPlaying={true}
        handlePlay={handlePlay}
        link={videoBio}
      />
    </Modal>
  );
};

export default VideoBioDataContainer;
