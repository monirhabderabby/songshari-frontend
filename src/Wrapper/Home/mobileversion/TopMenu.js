import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { MovSelect } from './movselect/MovSelect';
import "./TopMenu.css";
export const TopMenu = () => {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(true);
    };
    return (
        <div>
            <div className="grid grid-cols-5 mt-2 bg-top rounded-full ml-3 mr-3 pt-2 pb-2">
                <div className="ml-4 mov-top w-8 rounded-full mt-1 col-span-1">
                    <img src="https://i.ibb.co/pZFRdCB/512-512-Icon-1.png" alt="Not Available"></img>
                </div>
                <div onClick={handleClick} className="col-span-3">
                    <p className="font-bold text-sm mt-3 shongshari-mov">
                        shongshari.com{" "}
                        <span>
                            <i className="fa-solid fa-angle-down"></i>
                        </span>
                    </p>
                </div>

                <div className="mr-4">
                    <i className="fa-regular fa-bell mt-3 mr-4"></i>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            {}
            {state && (
                <div className="` ">
                    <Link to="/login" className="mt-4">
                        <span className="bg-red-500 text-white pt-2 pl-4 pr-4 pb-2 mr-4 rounded-full ml-8">Login</span>
                    </Link>

                    <span className="  pr-4">or</span>
                    <Link to={"/signup"} className="bg-red-500 text-white pt-2 pl-4 pr-4 pb-2 mr-4 rounded-full">
                        SignUp
                    </Link>
                </div>
            )}
        </div>
    );
};
