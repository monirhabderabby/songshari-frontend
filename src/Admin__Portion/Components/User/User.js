import React from "react";
import { Outlet } from "react-router";
import UserNav from "./UserNav/UserNav";

export const User = () => {
    return (
        <UserNav>
            <Outlet />
        </UserNav>
    );
};
