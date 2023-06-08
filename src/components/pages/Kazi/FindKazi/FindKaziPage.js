// Configuration
import React from "react";
import { Outlet } from "react-router";

// Components
import { FindLawyerKaziAgentHeader } from "../../../shared/Components/FindLawyerKaziAgent/FindLawyerKaziAgentHeader";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import Footer from "../../../shared/Footer/Footer";

const FindKaziPage = () => {
    return (
        <>
            <CustomHeader title="Find Kazi" />
            <div className="max-w-[1200px] mx-auto flex flex-col mt-5 h-auto">
                <FindLawyerKaziAgentHeader page="kazi" />
                <div className="h-full w-full mt-[20px] px-[20px]">
                    <Outlet />
                </div>
            </div>
            <div className="mt-[50px]">
                <Footer />
            </div>
        </>
    );
};

export default FindKaziPage;
