import React from "react";
import { useSelector } from "react-redux";
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
import Accordian from "./Accordion";

export const Profile = () => {
    const user = useSelector(state => state?.persistedReducer?.userInfo?.userInfo?.user);
    const { _id } = user;

    const { data, isLoading } = useGetProfileDetailsWIthAuthQuery();

    return (
        <div>
            <Accordian {...{ data, isLoading }}></Accordian>
        </div>
    );
};
