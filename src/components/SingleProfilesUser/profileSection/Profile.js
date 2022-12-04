import React from "react";
import { Outlet } from "react-router";
import Accordian from "./Accordion";

export const Profile = ({ data, isLoading }) => {
    return (
        <div>
            <Outlet />
            {/* <Accordian {...{ data, isLoading }}></Accordian> */}
        </div>
    );
};
