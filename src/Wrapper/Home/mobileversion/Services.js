// configuration
import React from "react";
import { Link } from "react-router-dom";

// images import
import partner from "../../../assets/images/NavIcons/Find-Your-Partner.png";
import Kazi from "../../../assets/images/NavIcons/Kazi.png";
import Lawyer from "../../../assets/images/NavIcons/Lawyer.png";
import courses from "../../../assets/images/NavIcons/Online-Course.png";
import Shop from "../../../assets/images/NavIcons/Shop.svg";
import { coursesBaseUrl, shopBaseUrl } from "../../../config";

export const Services = () => {
    return (
        <div>
            <h1 className="font-bold ml-6 mt-10 mb-4">All Services</h1>
            <div className="grid grid-cols-4 ml-5 gap-3 mr-6">
                <div className="bg-service-mov rounded-lg">
                    <Link to="/mobile-find-partner/suggested">
                        <img src={partner} className="w-8 mx-auto mt-1" alt="Not Available"></img>
                        <h1 className="text-[11px] text-white font-bold text-center pb-1">Find Match</h1>
                    </Link>
                </div>

                <div className=" bg-service-mov rounded-lg">
                    <Link to="/findLawyerMov">
                        <img src={Lawyer} className="w-8 mx-auto mt-1" alt="Not Available"></img>
                        <h1 className="text-[11px] text-white font-bold text-center pb-1">Lawyer</h1>
                    </Link>
                </div>

                <div className=" bg-service-mov rounded-lg">
                    <Link to="/findAgentMov">
                        <img src="https://svgshare.com/i/pDa.svg" className="w-8 mx-auto mt-1" alt="Not Available"></img>
                        <h1 className="text-[11px] text-white font-bold text-center pb-1">Agent</h1>
                    </Link>
                </div>

                <div className="bg-service-mov rounded-lg">
                    <Link to="/findKaziMov">
                        <img src={Kazi} className="w-8 mx-auto mt-1" alt="Not Available"></img>
                        <h1 className="text-[11px] text-white font-bold text-center pb-1">Kazi</h1>
                    </Link>
                </div>

                <div className="bg-service-mov rounded-lg">
                    <a href={shopBaseUrl}>
                        <img src={Shop} className="w-8 mx-auto mt-1" alt="Not Available"></img>
                        <h1 className="text-[11px] text-white font-bold text-center pb-1">Shop</h1>
                    </a>
                </div>

                <div className="bg-service-mov rounded-lg">
                    <a href={coursesBaseUrl}>
                        <img src={courses} className="w-8 mx-auto mt-1" alt="Not Available"></img>
                        <h1 className="text-[11px] text-white font-bold text-center pb-1">Courses</h1>
                    </a>
                </div>
            </div>
        </div>
    );
};
