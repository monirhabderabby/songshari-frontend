import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
// import { MovSelect } from './movselect/MovSelect';
import "./TopMenu.css";
export const TopMenu = () => {
    const [user] = useAuthState(auth);
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(true);
    };
    return (
        <div>
            <div className="grid grid-cols-5  bg-top rounded  pt-2 pb-2">
                <div className="ml-4 mov-top w-8 rounded-full mt-1 col-span-1">
                    <img src="https://i.ibb.co/pZFRdCB/512-512-Icon-1.png" alt="Not Available"></img>
                </div>
                {/* <div onClick={handleClick} className="col-span-3">
                    <p className="font-bold text-sm mt-3 shongshari-mov">
                        shongshari.com{" "}
                        <span>
                            <i className="fa-solid fa-angle-down"></i>
                        </span>
                    </p>
                </div> */}
                <select className="col-span-2 select-mov-home">
                <option>Shongshari.com</option>
                    
                <option className='font-bold text-3xl'>{user && user.displayName}</option>
                    <option className='bg-red-600 font-bold text-xl text-white'>
                        <div className="ml-4 mr-4 font-xl font-bold pl-8">{user && 'Logout'}</div>
                    </option>
                   
                </select>

                <div className="col-span-1">
                   
                </div>
                <div className="col-span-1">
                    <i className="fa-regular fa-bell mr-4"></i>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
         
            {user && state && (
                <div className="` ">
                    <Link to="" className="mt-4">
                        <span className="bg-red-500 text-white pt-2   pb-2  ml-8">{user.displayName}</span>
                    </Link>

                </div>
            )}
            {!user && state && (
                <div className="` ">
                    <Link to="/login" className="mt-4">
                        <span className="bg-red-500 text-white pt-2 pl-4 pr-4 pb-2 mr-4 rounded-full ml-8">Login</span>
                    </Link>

                    <span className="  pr-4">or</span>
                    <Link to={"/signup"} className="bg-red-500 text-white pt-2 pl-4 pr-4 pb-2 mr-4 rounded-full">
                        
                    </Link>
                </div>
            )}
        </div>
    );
};
