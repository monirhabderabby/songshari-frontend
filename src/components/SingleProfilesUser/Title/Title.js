import React from "react";
import "../../../assets/css/title.css";

const Title = ({ titleText }) => {
    return (
        <div className="text-left">
            <h1 className=" text-purple md:text-3xl font-semibold">{titleText}</h1>
            <h1 className="half-border my-2"></h1>
        </div>
    );
};

export default Title;
