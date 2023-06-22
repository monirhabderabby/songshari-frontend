import React from "react";
import customFunc from "../../../../assets/utilities/customFunc";

const Image = ({ photo, height, width, onClick, rounded }) => {
    // profile photo handler
    const { profilePhotoDecisionMaker } = customFunc;
    return (
        <div
            onClick={onClick}
            className={`w-[${height}] h-[${width}] rounded-[${rounded}] bg-cover bg-center cursor-pointer`}
            style={{
                backgroundImage: `url(${profilePhotoDecisionMaker(photo)})`,
            }}
        ></div>
    );
};

export default Image;
