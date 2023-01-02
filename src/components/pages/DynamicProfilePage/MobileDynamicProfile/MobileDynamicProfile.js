// configuration
import * as React from "react";
import { Link } from "react-router-dom";

export const MobileDynamicProfile = ({ data, isLoading }) => {
    // hooks variable

    return (
        <div className="mb-[69px] max-w-[523px] mx-auto">
            <div>
                <Link>
                    <div className="grid grid-cols-5 mt-5 mb-10">
                        <div className="col-span-4">
                            <h1 className="pl-8">Personal Details</h1>
                        </div>
                        <div>
                            <i className="fa-solid fa-angle-right ml-10"></i>
                        </div>
                    </div>
                </Link>
                <Link to="/othersprofessionaldetailsmov">
                    <div className="grid grid-cols-5 mt-5 mb-10">
                        <div className="col-span-4">
                            <h1 className="pl-8">Professional Details</h1>
                        </div>
                        <div>
                            <i className="fa-solid fa-angle-right ml-10"></i>
                        </div>
                    </div>
                </Link>
                <Link to="/otherseducationaldetailsmov">
                    <div className="grid grid-cols-5 mt-5 mb-10">
                        <div className="col-span-4">
                            <h1 className="pl-8">Educational Details</h1>
                        </div>
                        <div>
                            <i className="fa-solid fa-angle-right ml-10"></i>
                        </div>
                    </div>
                </Link>
                <Link to="/othersphysicaldetailsmov">
                    <div className="grid grid-cols-5 mt-5 mb-10">
                        <div className="col-span-4">
                            <h1 className="pl-8">Physical Details</h1>
                        </div>
                        <div>
                            <i className="fa-solid fa-angle-right ml-10"></i>
                        </div>
                    </div>
                </Link>
                <Link to="/othersdetailsmov">
                    <div className="grid grid-cols-5 mt-5 mb-10">
                        <div className="col-span-4">
                            <h1 className="pl-8">Other Details</h1>
                        </div>
                        <div>
                            <i className="fa-solid fa-angle-right ml-10"></i>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
