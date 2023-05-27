import React from "react";

import { Toaster } from "react-hot-toast";
import { AccountSwitchs } from "./accountConponents/AccountSwitchs";
import ChangeEmail from "./accountConponents/ChangeEmail";
import ChangePassword from "./accountConponents/ChangePassword";
import { Verification } from "./accountConponents/Verification";

export const Account = () => {
    return (
        <div className="w-full bg-white">
            <Verification />
            <div className="my-12">
                <AccountSwitchs />
            </div>
            <div className="mb-12">
                <ChangeEmail />
            </div>
            <div className="my-12">
                <ChangePassword />
            </div>
            <Toaster />
        </div>
    );
};
