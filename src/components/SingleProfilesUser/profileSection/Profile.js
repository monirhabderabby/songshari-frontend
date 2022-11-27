import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetProfileDetailsQuery } from "../../../Redux/features/userInfo/userApi";
import Accordian from "./Accordion";

export const Profile = () => {
    const [tables, setTables] = useState([]);

    const user = useSelector(state => state?.persistedReducer?.userInfo?.userInfo?.user);
    const { _id } = user;

    const { data, isLoading } = useGetProfileDetailsQuery(_id);

    useEffect(() => {
        fetch("json/tableData.json")
            .then(res => res.json())
            .then(data => {
                setTables(data);
            });
    }, []);

    return (
        <div>
            <Accordian {...{ data, isLoading }}></Accordian>
        </div>
    );
};
