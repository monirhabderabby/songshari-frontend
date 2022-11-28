import React from "react";
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
import Accordian from "./Accordion";

export const Profile = () => {
    const { data, isLoading } = useGetProfileDetailsWIthAuthQuery();

    return (
        <div>
            <Accordian {...{ data, isLoading }}></Accordian>
        </div>
    );
};
