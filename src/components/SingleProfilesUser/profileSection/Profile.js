import React, { useEffect, useState } from "react";
import Title from "../Title/Title";

export const Profile = () => {
    const [tables, setTables] = useState([]);
    useEffect(() => {
        fetch("json/tableData.json")
            .then(res => res.json())
            .then(data => {
                setTables(data);
            });
    }, []);
    return (
        <div>
            <div className="my-6 py-6 table-bar px-8">
                <div>
                    <Title titleText="This is first Table"></Title>
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
            <div class="w-full mt-10 bg-white px-4 py-6 rounded-lg shadow ">
                <Title titleText="Myself Summary"></Title>
                <div class="">
                    <div class="text-left">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate blanditiis cum amet corrupti! Repellendus veritatis
                            dicta reiciendis eligendi, vero ea nemo. Adipisci tenetur quis neque assumenda a libero maiores eaque?
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-6 py-6 table-bar px-8">
                <div>
                    <Title titleText="This is third Table"></Title>
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
            <div className="my-6 py-6 table-bar px-8">
                <div>
                    <Title titleText="This is second Table"></Title>
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
        </div>
    );
};
