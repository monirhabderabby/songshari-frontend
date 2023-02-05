import React from "react";
import liveLinkGenerator from "../../../../../../assets/utilities/liveLink/liveLinkGenerator";

const SingleServiceImageCard = ({ photo, i, setSelectedPhoto, selectedPhoto }) => {
    return (
        <div>
            <img
                onClick={() => setSelectedPhoto(photo)}
                src={liveLinkGenerator(photo)}
                className={`w-[93px] h-[70px] rounded border-2 border-white duration-300 ${photo === selectedPhoto && "border-1 border-green-400"}`}
                alt="serviceImage"
            />
        </div>
    );
};

export default SingleServiceImageCard;
