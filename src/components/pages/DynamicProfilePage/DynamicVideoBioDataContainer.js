import { Modal } from "antd";
import React from "react";
import "../../../App.css";
import { Reacthtml5Player } from "../../shared/Components/Reacthtml5Player/Reacthtml5Player";

export const DynamicVideoBioDataContainer = ({ isModalOpen, setModalOpen }) => {
    const handlePlay = () => {
        console.log("dfds");
    };
    return (
        <Modal open={isModalOpen} centered footer={null} onCancel={() => setModalOpen(false)}>
            <Reacthtml5Player
                isPlaying={true}
                handlePlay={handlePlay}
                link="https://res.cloudinary.com/dszsphxcy/video/upload/v1684719736/cclousure.mp4"
            />
        </Modal>
    );
};
