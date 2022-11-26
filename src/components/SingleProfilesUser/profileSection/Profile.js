import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Title from "../Title/Title";
import Accordian from "./Accordion";

export const Profile = () => {
    const [tables, setTables] = useState([]);
    const [edit, setEdit] = useState(false);

    const user = useSelector(state => state?.persistedReducer?.userInfo?.userInfo?.user);

    useEffect(() => {
        fetch("json/tableData.json")
            .then(res => res.json())
            .then(data => {
                setTables(data);
            });
    }, []);

    const handleEdit = () => {
        setEdit(!edit);
    };
    return (
        <div>
            <Accordian></Accordian>
        </div>
    );
};
