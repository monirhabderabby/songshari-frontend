import React from "react";
import Accordian from "./Accordion";

export const Profile = ({ data, isLoading }) => {
    return (
        <div>
            <Accordian {...{ data, isLoading }}></Accordian>
        </div>
    );
};
