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
            {/* <div className={`mt-4 mx-4 ${edit ? "pt-6 pb-2" : "py-6"} table-bar px-8 shadow-md duration-300`}>
                <div className="flex justify-between h-[60px] items-center">
                    <Title titleText="Personal Details"></Title>
                    <button onClick={handleEdit} className="underline">
                        Edit
                    </button>
                </div>
                <div className="h-[40px] flex justify-between items-center border-b-[2px] border-dotted">
                    <span>Name</span>
                    {edit ? (
                        <input type="text" className="outline-none text-black" placeholder="Your name" />
                    ) : (
                        <span>{user?.firstName + " " + user?.lastName}</span>
                    )}
                </div>
                <div className="h-[40px] flex justify-between items-center border-b-[2px] border-dotted">
                    <span>Email</span>
                    {edit ? <input type="text" className="outline-none text-black" placeholder="Write here" /> : <span>{user?.email}</span>}
                </div>
                <div className="h-[40px] flex justify-between items-center border-b-[2px] border-dotted">
                    <span>Phone</span>
                    {edit ? <input type="text" className="outline-none text-black" placeholder="Your phone" /> : <span>{user?.phone}</span>}
                </div>
                <div className="h-[40px] flex justify-between items-center border-b-[2px] border-dotted">
                    <span>NID or Password</span>
                    {edit ? (
                        <input type="text" className="outline-none text-black" placeholder="Your passport or NID" />
                    ) : (
                        <span>{user?.NidOrPassportNumber}</span>
                    )}
                </div>
                {edit ? (
                    <div className="flex gap-x-3 my-3 items-center">
                        <button className="px-3 py-1 bg-gray-200 font-semibold rounded-full" onClick={() => setEdit(!edit)}>
                            Close
                        </button>{" "}
                        <button className="px-3 py-1 bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white font-semibold rounded-full">
                            Save info
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </div> */}
            <Accordian></Accordian>
        </div>
    );
};
