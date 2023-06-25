import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import CompleteFeaturePackages from "./CompleteFeaturePackages";
import PackageContainer from "./PackageContainer";

const Packages = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top of the page whenever the location changes
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <>
            <div className="lg:hidden">
                <MobileBackButton name="Packages" />
            </div>
            <div>
                <div className="hidden lg:block">
                    <CustomHeader title="Packages" />
                </div>
                <PackageContainer />
                <CompleteFeaturePackages />
                <div className="hidden lg:block">
                    <Footer />
                </div>
                <div className="lg:hidden">
                    <BottomNav />
                </div>
            </div>
        </>
    );
};

export default Packages;
