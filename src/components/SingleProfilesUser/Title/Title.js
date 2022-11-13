import React from "react";
import "../../../assets/css/title.css";

const Title = ({ titleText }) => {
    return (
        <div className="py-2 text-left">
            <h1 className=" text-purple text-3xl">{titleText}</h1>
            <h1 className="half-border my-2"></h1>
            <hr />
        </div>
    );
};

export default Title;
