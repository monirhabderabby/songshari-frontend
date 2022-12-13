// configuration, ex: react-router
import React from "react";

// components
import { RecentApprovedUser } from "./Recent__Approved__User/RecentApprovedUser";
import { RecentRejectedUser } from "./Recent__Rejected__User/RecentRejectedUser";
import { RegistrationRequest } from "./Registration__Request/RegistrationRequest";
import { SendForReSubmit } from "./Send__For__Resubmit/SendForReSubmit";

export const ViewRegistrationRequest = () => {
    return (
        <div className="px-[32px]">
            <RegistrationRequest />
            <SendForReSubmit />
            <RecentApprovedUser />
            <RecentRejectedUser />
        </div>
    );
};
