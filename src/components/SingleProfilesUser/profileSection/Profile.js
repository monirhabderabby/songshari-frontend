import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetRecentUsersQuery } from "../../../Redux/features/AllRecentData/recentApi";
import Title from "../Title/Title";

export const Profile = () => {
    const [tables, setTables] = useState([]);
    const [edit, setEdit] = useState(false);

    const { token, user } = useSelector(state => state?.persistedReducer?.userInfo?.userInfo);

    const { data, isSuccess } = useGetRecentUsersQuery();
    if (isSuccess) {
        console.log(data);
    }

    if (user) {
        console.log(user);
    }

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
            <div className={`mt-4 mx-4 ${edit ? "pt-6 pb-2" : "py-6"} table-bar px-8 shadow-md duration-300`}>
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
                        <span>{user.firstName + " " + user.lastName}</span>
                    )}
                </div>
                <div className="h-[40px] flex justify-between items-center border-b-[2px] border-dotted">
                    <span>Email</span>
                    {edit ? <input type="text" className="outline-none text-black" placeholder="Write here" /> : <span>{user.email}</span>}
                </div>
                <div className="h-[40px] flex justify-between items-center border-b-[2px] border-dotted">
                    <span>Phone</span>
                    {edit ? <input type="text" className="outline-none text-black" placeholder="Your phone" /> : <span>{user.phone}</span>}
                </div>
                <div className="h-[40px] flex justify-between items-center border-b-[2px] border-dotted">
                    <span>NID or Password</span>
                    {edit ? (
                        <input type="text" className="outline-none text-black" placeholder="Your passport or NID" />
                    ) : (
                        <span>{user.NidOrPassportNumber}</span>
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
            </div>
            <div className="w-full mt-10 bg-white px-4 py-6 rounded-lg shadow  mx-4">
                <Title titleText="Myself Summary"></Title>

                <div className="">
                    <div className="text-left">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate blanditiis cum amet corrupti! Repellendus veritatis
                            dicta reiciendis eligendi, vero ea nemo. Adipisci tenetur quis neque assumenda a libero maiores eaque?
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-6 py-6 mx-4 table-bar px-8 shadow">
                <div className="flex justify-between">
                    <Title titleText="Educational Details"></Title>
                    <button onClick={handleEdit} className="underline">
                        Edit
                    </button>
                </div>
                {tables.map(t => {
                    return (
                        <div className="">
                            <div className="flex justify-between custom-design">
                                <h1>{t.name}</h1>
                                <h1>{t.title}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="my-6 py-6 table-bar px-8 mx-4 shadow">
                <div className="flex justify-between">
                    <Title titleText="Others Details"></Title>
                    <button onClick={handleEdit} className="underline">
                        Edit
                    </button>
                </div>
                {tables.map((t, i) => {
                    return (
                        <div key={i} className="">
                            <div className="flex justify-between custom-design">
                                <h1>{t.name}</h1>
                                <h1>{t.title}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
