import React from "react";
import { Outlet } from "react-router-dom";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import FindPartnersHeader from "./FindPartnersHeader";
import PartnerFilterBox from "./PartnerFilterBox";

const FindPartners = () => {
    return (
        <div className="bg-[#fafbff]">
            <div className="hidden md:block">
                <CustomHeader title="Find Partners" />
            </div>

            <div className="hidden md:block">
                <section className="py-10">
                    <div className="max-w-[1300px] mx-auto ">
                        <div className="grid grid-cols-1 lg:grid-cols-3  xl:grid-cols-4 gap-4 justify-center ">
                            <div></div>
                            <div className="lg:col-span-2 xl:col-span-3 hidden md:block">
                                <PartnerFilterBox />
                                <FindPartnersHeader />
                                <div>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <Footer />
                </section>
            </div>
            <div className="md:hidden">
                <section className="py-10">
                    <div className="max-w-[1300px] mx-auto ">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <PartnerFilterBox />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FindPartners;
