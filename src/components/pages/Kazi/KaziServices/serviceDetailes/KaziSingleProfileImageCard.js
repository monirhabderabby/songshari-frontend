import React from "react";

const KaziSingleProfileImageCard = ({ photo, i, setSelectedId }) => {
    return (
        <div>
            <img onClick={() => setSelectedId(i)} src={photo} className="w-[93px] h-[70px] rounded border-2 border-white" alt="" />
        </div>
    );
};

export default KaziSingleProfileImageCard;
