import React from "react";

const PrimaryBtn = ({ value, onClick, size }) => {
    return (
        <button
            className={`bg-[linear-gradient(171deg,rgba(233,11,200,0.6979166666666667)_41%,_rgba(166,2,241,0.79)_100%)] py-[5px] px-[15px] text-white rounded-[50px] ${
                size === "small" && "text-[12px]"
            }`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default PrimaryBtn;
