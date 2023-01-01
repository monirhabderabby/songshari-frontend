import React from "react";
import Blog from "../../../assets/images/Logo/Blog.svg";
import Kazi from "../../../assets/images/Logo/Kazi.svg";
import Lawyer from "../../../assets/images/Logo/Lawyer.svg";
import courses from "../../../assets/images/Logo/online.svg";
import partner from "../../../assets/images/Logo/partner.svg";
import Shop from "../../../assets/images/Logo/Shop.svg";
export const TabService = () => {
    return (
        <div>
            <h1 className="font-bold ml-10 mt-12 mb-4">All Services</h1>
            <div className="grid grid-cols-4 gap-3 ml-12">
                <img src={partner} className="w-14 bg-service-mov rounded-full" alt="Not Available"></img>
                <img src={Lawyer} className="w-14 bg-service-mov rounded-full" alt="Not Available"></img>
                <img src="https://svgshare.com/i/pDa.svg" className="w-14 bg-service-mov rounded-full" alt="Not Available"></img>
                <img src={Kazi} className="w-14 bg-service-mov rounded-full" alt="Not Available"></img>
                <img src={Shop} className="w-14 bg-service-mov rounded-full" alt="Not Available"></img>
                <img src={courses} className="w-14 bg-service-mov rounded-full" alt="Not Available"></img>
                <img src={Blog} className="w-14 bg-service-mov rounded-full" alt="Not Available"></img>
            </div>
        </div>
    );
};
