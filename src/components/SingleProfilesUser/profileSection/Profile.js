import React from "react";
import { Outlet } from "react-router";
import Accordian from "./Accordion";

export const Profile = ({ data, isLoading }) => {

    return (
        <div>
            <Outlet context={[data, isLoading]} />
            {/* <Accordian {...{ data, isLoading }}></Accordian> */}
        </div>
    );
};
