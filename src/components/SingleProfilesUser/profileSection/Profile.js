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

    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
       setEdit(true);
    }
    return (
        <div>
            <div className="my-6 py-6 table-bar px-8">
                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    
                    <Title titleText="This is first Table"></Title>
                    <button onClick={handleEdit} className='btn'>Edit</button>
                </div>
                {tables.map(t => {
                    return (
                        <div className="">

{
    edit ?   <div className="flex justify-between custom-design">      
    <h1 className="flex items-center bg-gray-100 p-2 rounded-xl border-solid border-2 border-gray-400">
    <input type='text' className="bg-transparent" placeholder="enter name" defaultValue={t.name}></input>
    </h1>

    <h1 className="flex items-center bg-gray-100 p-2 rounded-xl border-solid border-2 border-gray-400">
    <input type='text' className="bg-transparent" defaultValue={t.title}></input>
    </h1>
               
            </div>
            :
            <div className="flex justify-between custom-design">      
            <h1 className="flex items-center bg-gray-100 p-2 rounded-xl">
            <input type='text' className="bg-transparent" placeholder="enter name" defaultValue={t.name} disabled ></input>
            </h1>

            <h1 className="flex items-center bg-gray-100 p-2 rounded-xl">
            <input type='text' className="bg-transparent" defaultValue={t.title} disabled></input>
            </h1>
                       
                    </div>
}

                          
                        </div>
                        
                    );
                })}
                {
                    edit && <button className='btn bg-gray-300 rounded-full p-2 mt-2'>Save Changes</button>
                }
                
            </div>
            <div className="w-full mt-10 bg-white px-4 py-6 rounded-lg shadow ">
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
                {tables.map((t,i) => {
                    return (
                        <div key={i}  className="">
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
