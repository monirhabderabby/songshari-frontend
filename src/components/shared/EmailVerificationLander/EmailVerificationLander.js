import React from "react";
import { useLocation } from "react-router";
import { MobileBackButton } from "../Components/MobileBackButton";
import CustomHeader from "../CustomHeader/CustomHeader";
import { EmailVerificationContainer } from "./EmailVerificationContainer";

export const EmailVerificationLander = () => {
    // js variables
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    return (
        <div>
            <div className="hidden lg:block">
                <CustomHeader title="Email Verification" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton />
            </div>
            <div className="max-w-[1400px] mx-auto">
                <EmailVerificationContainer from={from} />
            </div>
        </div>
    );
};
